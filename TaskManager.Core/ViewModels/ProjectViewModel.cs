using TaskManager.Core.Entities;

namespace TaskManager.Core.ViewModels
{
  public class ProjectViewModel
  {
    public int ProjectID { get; set; }
    public string ProjectName { get; set; } = string.Empty;
    public string DateOfStart { get; set; } = string.Empty;
    public int? TeamSize { get; set; }
    public bool Active { get; set; }
    public string Status { get; set; } = string.Empty;
    public int ClientLocationID { get; set; }
    public ClientLocation? ClientLocation { get; set; } 
  }
}
