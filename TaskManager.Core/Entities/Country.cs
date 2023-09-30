using System.ComponentModel.DataAnnotations;

namespace TaskManager.Core.Entities
{
  public class Country
  {
    [Key]
    public int CountryID { get; set; }

    [StringLength(50)]
    public string CountryName { get; set; } = string.Empty;
  }
}
