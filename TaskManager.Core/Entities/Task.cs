using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using TaskManager.Core.Identity;

namespace TaskManager.Core.Entities
{
  public class Task
  {
    [Key]
    public int TaskID { get; set; } 

    [StringLength(100)]
    public string TaskName { get; set; } = string.Empty; 

    [StringLength(200)]
    public string? Description { get; set; } 

    [DisplayFormat(DataFormatString = "d/M/yyyy")]
    public DateTime CreatedOn { get; set; } 

    public int ProjectID { get; set; } 

    public Guid CreatedBy { get; set; } 

    public Guid AssignedTo { get; set; } 

    public int TaskPriorityID { get; set; } 

    [DisplayFormat(DataFormatString = "d/M/yyyy")]
    public DateTime LastUpdatedOn { get; set; } 

    public int TaskStatusID { get; set; }

    [StringLength(50)]
    public string CurrentStatus { get; set; } = string.Empty; 

    [ForeignKey("ProjectID")]
    public virtual Project? Project { get; set; }

    [ForeignKey("CreatedBy")]
    public virtual ApplicationUser? CreatedByUser { get; set; }

    [ForeignKey("AssignedTo")]
    public virtual ApplicationUser? AssignedToUser { get; set; }

    [ForeignKey("TaskPriorityID")]
    public virtual TaskPriority? TaskPriority { get; set; }

    public virtual ICollection<TaskStatusDetail>? TaskStatusDetails { get; set; }
  }

  public class GroupedTask
  {
    public string TaskStatusName { get; set; } = string.Empty;
    public List<Task>? Tasks { get; set; }
  }
}

