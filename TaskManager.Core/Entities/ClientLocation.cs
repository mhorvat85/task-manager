using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TaskManager.Core.Entities
{
  public class ClientLocation
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int ClientLocationID { get; set; }

    [StringLength(50)]
    public string? ClientLocationName { get; set; }
  }
}
