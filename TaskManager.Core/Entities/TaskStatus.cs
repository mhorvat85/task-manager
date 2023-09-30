using System.ComponentModel.DataAnnotations;

namespace TaskManager.Core.Entities
{
  public class TaskStatus
  {
    [Key]
    public int TaskStatusID { get; set; }

    [StringLength(50)]
    public string TaskStatusName { get; set; } = string.Empty;
  }
}
