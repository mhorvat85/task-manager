using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using TaskManager.Core.Identity;

namespace TaskManager.Core.Entities
{
  public class Skill
  {
    [Key]
    public int SkillID { get; set; }

    [StringLength(50)]
    public string SkillName { get; set; } = string.Empty;

    [StringLength(20)]
    public string SkillLevel { get; set; } = string.Empty;

    public Guid Id { get; set; }

    [ForeignKey("Id")]
    public virtual ApplicationUser? ApplicationUser { get; set; }
  }
}
