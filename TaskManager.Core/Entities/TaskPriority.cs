using System.ComponentModel.DataAnnotations;

namespace TaskManager.Core.Entities
{
  public class TaskPriority
  {
    [Key]
    public int TaskPriorityID { get; set; }

    [StringLength(50)]
    public string TaskPriorityName { get; set; } = string.Empty;
  }
}
