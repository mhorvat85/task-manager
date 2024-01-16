using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TaskManager.Core.Entities;
using TaskManager.Core.Identity;
using TaskManager.Core.ViewModels;
using TaskManager.Infrastructure.DatabaseContext;
using TaskManager.WebAPI.ServiceContracts;

namespace TaskManager.WebAPI.Services
{
  public class UsersService : IUsersService
  {
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly SignInManager<ApplicationUser> _signInManager;
    private readonly IConfiguration _configuration;
    private readonly ApplicationDbContext _db;

    public UsersService(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IConfiguration configuration, ApplicationDbContext db)
    {
      _userManager = userManager;
      _signInManager = signInManager;
      _configuration = configuration;
      _db = db;
    }

    public async Task<ApplicationUser?> Authenticate(LoginViewModel loginViewModel)
    {
      SignInResult result = await _signInManager.PasswordSignInAsync(loginViewModel.Username, loginViewModel.Password, false, false);

      if (result.Succeeded)
      {
        ApplicationUser? applicationUser = await _userManager.FindByNameAsync(loginViewModel.Username);
        if (applicationUser != null)
        {
          applicationUser.PasswordHash = null;

          if (await _userManager.IsInRoleAsync(applicationUser, "Admin"))
            applicationUser.Role = "Admin";

          else if (await _userManager.IsInRoleAsync(applicationUser, "Employee"))
            applicationUser.Role = "Employee";

          CreateToken(applicationUser);

          return applicationUser;
        }
        else
        {
          return null;
        }
      }
      else
      {
        return null;
      }
    }

    public async Task<ApplicationUser?> Register(SignUpViewModel signUpViewModel)
    {
      ApplicationUser applicationUser = new() { UserName = signUpViewModel.Email, FirstName = signUpViewModel.PersonName.FirstName, LastName = signUpViewModel.PersonName.LastName, Email = signUpViewModel.Email, PhoneNumber = signUpViewModel.Mobile, DateOfBirth = Convert.ToDateTime(signUpViewModel.DateOfBirth), Gender = signUpViewModel.Gender, CountryID = signUpViewModel.CountryID, ReceiveNewsLetters = signUpViewModel.ReceiveNewsLetters, Role = "Employee" };

      IdentityResult identityResult = await _userManager.CreateAsync(applicationUser, signUpViewModel.Password);

      if (identityResult.Succeeded)
      {
        if ((await _userManager.AddToRoleAsync(applicationUser, "Employee")).Succeeded)
        {
          await _signInManager.SignInAsync(applicationUser, isPersistent: false);

          CreateToken(applicationUser);

          foreach (Skill sk in signUpViewModel.Skills)
          {
            Skill skill = new() { SkillName = sk.SkillName, SkillLevel = sk.SkillLevel, Id = applicationUser.Id, ApplicationUser = null };

            await _db.Skills.AddAsync(skill);
            await _db.SaveChangesAsync();
          }

          applicationUser.PasswordHash = null;
          return applicationUser;
        }
        else
        {
          return null;
        }
      }
      else
      {
        return null;
      }
    }

    public async Task<ApplicationUser?> GetUserByEmail(string Email)
    {
      return await _userManager.FindByEmailAsync(Email);
    }

    private void CreateToken(ApplicationUser applicationUser)
    {
      DateTime tokenExpiration = DateTime.UtcNow.AddHours(Convert.ToDouble(_configuration["Jwt:EXPIRATION_TIME"]));

      Claim[] claims = new Claim[] {
        new Claim(JwtRegisteredClaimNames.Sub, applicationUser.Id.ToString()),
        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()), 
        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()), 
        new Claim(ClaimTypes.Email, applicationUser.Email!),
        new Claim(ClaimTypes.Name, applicationUser.Id.ToString()),
        new Claim(ClaimTypes.Role, applicationUser.Role),
      };

      SymmetricSecurityKey securityKey = new(Encoding.UTF8.GetBytes(_configuration["Jwt:Secret"]!));
      SigningCredentials signingCredentials = new(securityKey, SecurityAlgorithms.HmacSha256);

      JwtSecurityToken tokenGenerator = new(
       _configuration["Jwt:Issuer"],
       _configuration["Jwt:Audience"],
       claims,
       expires: tokenExpiration,
       signingCredentials: signingCredentials
       );

      JwtSecurityTokenHandler tokenHandler = new();
      applicationUser.Token = tokenHandler.WriteToken(tokenGenerator);
    }
  }
}
