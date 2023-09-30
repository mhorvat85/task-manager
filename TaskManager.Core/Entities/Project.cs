using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskManager.Core.Entities
{
  public class Project
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public int ProjectID { get; set; }

    [StringLength(50)]
    public string ProjectName { get; set; } = string.Empty;

    [DisplayFormat(DataFormatString = "d/M/yyyy")]
    public DateTime DateOfStart { get; set; }

    public int? TeamSize { get; set; }

    public bool Active { get; set; }

    [StringLength(10)]
    public string Status { get; set; } = string.Empty;

    public int ClientLocationID { get; set; }

    [ForeignKey("ClientLocationID")]
    public virtual ClientLocation? ClientLocation { get; set; }
  }
}
