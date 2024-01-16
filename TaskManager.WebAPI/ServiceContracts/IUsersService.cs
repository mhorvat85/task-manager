using TaskManager.Core.Identity;
using TaskManager.Core.ViewModels;

namespace TaskManager.WebAPI.ServiceContracts
{
  public interface IUsersService
  {
    Task<ApplicationUser?> Authenticate(LoginViewModel loginViewModel);
    Task<ApplicationUser?> Register(SignUpViewModel signUpViewModel);
    Task<ApplicationUser?> GetUserByEmail(string Email);
  }
}
