using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManager.Core.Identity;
using TaskManager.Core.ViewModels;
using TaskManager.Infrastructure.DatabaseContext;
using TaskManager.WebAPI.ServiceContracts;

namespace TaskManager.WebAPI.Controllers.WebControllers
{
  [ApiController]
  //[AllowAnonymous]
  public class AccountController : ControllerBase
  {
    private readonly IUsersService _usersService;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly ApplicationDbContext _db;

    public AccountController(IUsersService usersService, UserManager<ApplicationUser> userManager, ApplicationDbContext db)
    {
      _usersService = usersService;
      _userManager = userManager;
      _db = db;
    }

    [HttpPost("authenticate")]
    public async Task<IActionResult> Authenticate(LoginViewModel loginViewModel)
    {
      if (loginViewModel.Username != null && loginViewModel.Password != null)
      {
        ApplicationUser? user = await _usersService.Authenticate(loginViewModel);
        if (user == null)
          return BadRequest(new { message = "Username or password is incorrect" });

        return Ok(user);
      }
      else
      {
        return BadRequest(new { message = "Username or password is incorrect" });
      }
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(SignUpViewModel signUpViewModel)
    {
      ApplicationUser? user = await _usersService.Register(signUpViewModel);
      if (user == null)
        return BadRequest(new { message = "Invalid Data" });

      return Ok(user);
    }

    [HttpGet("api/getuserbyemail/{email}")]
    public async Task<bool> GetUserByEmail(string email)
    {
      ApplicationUser? user = await _usersService.GetUserByEmail(email);
      if (user != null)
      {
        return true;
      }
      else
      {
        return false;
      }
    }

    [HttpGet("api/getallemployees")]
    public async Task<IActionResult> GetEmployees()
    {
      List<ApplicationUser> users = await _db.Users.ToListAsync();
      List<ApplicationUser> employeeUsers = new();

      foreach (ApplicationUser item in users)
      {
        if ((await _userManager.IsInRoleAsync(item, "Employee")))
        {
          employeeUsers.Add(item);
        }
      }
      return Ok(employeeUsers);
    }
  }
}
