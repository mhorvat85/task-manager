using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskManager.Core.Identity
{
  public class ApplicationUser : IdentityUser<Guid>
  {
    [NotMapped]
    public string Token { get; set; } = string.Empty;

    [NotMapped]
    public string Role { get; set; } = string.Empty;

    [StringLength(50)]
    public string FirstName { get; set; } = string.Empty;

    [StringLength(50)]
    public string LastName { get; set; } = string.Empty;

    public DateTime DateOfBirth { get; set; }

    [StringLength(10)]
    public string Gender { get; set; } = string.Empty;

    public int CountryID { get; set; }

    public bool ReceiveNewsLetters { get; set; }
  }
}
