using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using TaskManager.Core.Identity;

namespace TaskManager.Core.Entities
{
  public class TaskStatusDetail
  {
    [Key]
    public int TaskStatusDetailID { get; set; }

    public int TaskID { get; set; }

    public int TaskStatusID { get; set; }

    public Guid Id { get; set; }

    [StringLength(200)]
    public string? Description { get; set; }

    [DisplayFormat(DataFormatString = "d/M/yyyy")]
    public DateTime StatusUpdationDateTime { get; set; }

    [ForeignKey("TaskStatusID")]
    public virtual TaskStatus? TaskStatus { get; set; }

    [ForeignKey("Id")]
    public virtual ApplicationUser? User { get; set; }
  }
}
