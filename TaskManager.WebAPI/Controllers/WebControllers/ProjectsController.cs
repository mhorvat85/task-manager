using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManager.Core.Entities;
using TaskManager.Core.ViewModels;
using TaskManager.Infrastructure.DatabaseContext;

namespace TaskManager.WebAPI.Controllers.APIControllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class ProjectsController : ControllerBase
  {
    private readonly ApplicationDbContext _db;

    public ProjectsController(ApplicationDbContext db)
    {
      _db = db;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProjectViewModel>>> GetProjects()
    {
      List<Project> projects = await _db.Projects.Include("ClientLocation").ToListAsync();

      if (projects.Count > 0)
      {
        List<ProjectViewModel> projectsViewModel = new();
        foreach (Project project in projects)
        {
          projectsViewModel.Add(DtoObject(project));
        }
        return projectsViewModel;
      }
      else return NoContent();
    }

    [HttpGet("search/{searchBy}/{searchText}")]
    public async Task<ActionResult<IEnumerable<ProjectViewModel>>> SearchProjects(string searchBy, string searchText)
    {
      List<Project> projects = searchBy switch
      {
        "ProjectID" => await _db.Projects.Include("ClientLocation").Where(temp => temp.ProjectID.ToString().Contains(searchText)).ToListAsync(),
        "ProjectName" => await _db.Projects.Include("ClientLocation").Where(temp => temp.ProjectName.Contains(searchText)).ToListAsync(),
        "DateOfStart" => await _db.Projects.Include("ClientLocation").Where(temp => temp.DateOfStart.ToString().Contains(searchText)).ToListAsync(),
        "TeamSize" => await _db.Projects.Include("ClientLocation").Where(temp => temp.TeamSize.ToString()!.Contains(searchText)).ToListAsync(),
        _ => await _db.Projects.ToListAsync()
      };

      List<ProjectViewModel> projectsViewModel = new();
      foreach (Project project in projects)
      {
        projectsViewModel.Add(DtoObject(project));
      }
      return projectsViewModel;
    }

    [HttpGet("searchbyprojectid/{projectID}")]
    public async Task<ActionResult<ProjectViewModel>?> GetProjectByProjectID(int projectID)
    {
      Project? existingProject = await _db.Projects.Include("ClientLocation").Where(temp => temp.ProjectID == projectID).FirstOrDefaultAsync();

      if (existingProject != null)
      {
        return DtoObject(existingProject);
      }
      else return null;
    }

    [HttpPost]
    public async Task<ActionResult<ProjectViewModel>> InsertProject(Project project)
    {
      project.ClientLocation = null;
      await _db.Projects.AddAsync(project);
      await _db.SaveChangesAsync();

      Project? insertedProject = await _db.Projects.Include("ClientLocation").Where(temp => temp.ProjectID == project.ProjectID).FirstOrDefaultAsync();

      if (insertedProject != null)
      {
        return DtoObject(insertedProject);
      }
      else return Problem("Inserted project record is null.");
    }

    [HttpPut]
    public async Task<ActionResult<ProjectViewModel>>? UpdateProject(Project project)
    {
      Project? existingProject = await _db.Projects.Include("ClientLocation").Where(temp => temp.ProjectID == project.ProjectID).FirstOrDefaultAsync();

      if (existingProject != null)
      {
        existingProject.ProjectName = project.ProjectName;
        existingProject.DateOfStart = project.DateOfStart;
        existingProject.TeamSize = project.TeamSize;
        existingProject.Active = project.Active;
        existingProject.Status = project.Status;
        existingProject.ClientLocationID = project.ClientLocationID;
        await _db.SaveChangesAsync();

        Project? updatedProject = await _db.Projects.Include("ClientLocation").Where(temp => temp.ProjectID == existingProject.ProjectID).FirstOrDefaultAsync();

        if (updatedProject != null)
        {
          return DtoObject(updatedProject);
        }
        else return Problem("Updated project record is null.");
      }
      else return NotFound();
    }

    [HttpDelete("{projectID}")]
    public async Task<IActionResult> DeleteProject(int projectID)
    {
      Project? existingProject = await _db.Projects.Where(temp => temp.ProjectID == projectID).FirstOrDefaultAsync();

      if (existingProject != null)
      {
        _db.Projects.Remove(existingProject);
        await _db.SaveChangesAsync();

        return NoContent();
      }
      else return NotFound();
    }

    private static ProjectViewModel DtoObject(Project project)
    {
      return new ProjectViewModel() { ProjectID = project.ProjectID, ProjectName = project.ProjectName, DateOfStart = project.DateOfStart.ToString("dd/MM/yyyy"), TeamSize = project.TeamSize, Active = project.Active, Status = project.Status, ClientLocationID = project.ClientLocationID, ClientLocation = project.ClientLocation };
    }
  }
}
