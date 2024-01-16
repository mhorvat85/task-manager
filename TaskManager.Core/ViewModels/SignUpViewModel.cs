using TaskManager.Core.Entities;

namespace TaskManager.Core.ViewModels
{
  public class SignUpViewModel
  {
    public PersonFullName PersonName { get; set; } = new PersonFullName();
    public string Email { get; set; } = string.Empty;
    public string Mobile { get; set; } = string.Empty;
    public string DateOfBirth { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string Gender { get; set; } = string.Empty;
    public int CountryID { get; set; }
    public bool ReceiveNewsLetters { get; set; }
    public List<Skill> Skills { get; set; } = new List<Skill>();
  }

  public class PersonFullName
  {
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
  }
}
