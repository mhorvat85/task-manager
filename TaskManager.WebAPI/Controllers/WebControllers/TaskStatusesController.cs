using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManager.Infrastructure.DatabaseContext;

namespace TaskManager.WebAPI.Controllers.WebControllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class TaskStatusesController : ControllerBase
  {
    private readonly ApplicationDbContext _db;

    public TaskStatusesController(ApplicationDbContext db)
    {
      _db = db;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Core.Entities.TaskStatus>>> GetTaskStatuses()
    {
      var taskStatuses = await _db.TaskStatuses.ToListAsync();

      if (taskStatuses.Count > 0)
      {
        return taskStatuses;
      }
      else return NoContent();
    }

    [HttpGet("searchbytaskstatusid/{taskStatusID}")]
    public async Task<ActionResult<Core.Entities.TaskStatus>> GetTaskStatusByTaskStatusID(int taskStatusID)
    {
      var existingtaskStatus = await _db.TaskStatuses.Where(temp => temp.TaskStatusID == taskStatusID).FirstOrDefaultAsync();

      if (existingtaskStatus != null)
      {
        return existingtaskStatus;
      }
      else return NoContent();
    }

    [HttpPost]
    public async Task<ActionResult<Core.Entities.TaskStatus>> InsertTaskStatus(Core.Entities.TaskStatus taskStatus)
    {
      await _db.TaskStatuses.AddAsync(taskStatus);
      await _db.SaveChangesAsync();

      var insertedTaskStatus = await _db.TaskStatuses.Where(temp => temp.TaskStatusID == taskStatus.TaskStatusID).FirstOrDefaultAsync();

      if (insertedTaskStatus != null)
      {
        return insertedTaskStatus;
      }
      else return Problem("Inserted task status record is null.");
    }

    [HttpPut]
    public async Task<ActionResult<Core.Entities.TaskStatus>> UpdateTaskStatus(Core.Entities.TaskStatus taskStatus)
    {
      if (taskStatus.TaskStatusID == 1 || taskStatus.TaskStatusID == 5) return Unauthorized();

      var existingTasks = await _db.Tasks.Where(temp => temp.TaskStatusID == taskStatus.TaskStatusID).ToListAsync();

      if (existingTasks.Any())
      {
        foreach (var task in existingTasks)
        {
          task.CurrentStatus = taskStatus.TaskStatusName;
        }
        await _db.SaveChangesAsync();
      }

      var existingTaskStatus = await _db.TaskStatuses.Where(temp => temp.TaskStatusID == taskStatus.TaskStatusID).FirstOrDefaultAsync();

      if (existingTaskStatus != null)
      {
        existingTaskStatus.TaskStatusName = taskStatus.TaskStatusName;
        await _db.SaveChangesAsync();

        return existingTaskStatus;
      }
      else return NotFound();
    }

    [HttpDelete]
    public async Task<IActionResult> DeleteTaskStatus(int taskStatusID)
    {
      if (taskStatusID == 1 || taskStatusID == 5) return Unauthorized(); 

      var existingTasks = await _db.Tasks.Where(temp => temp.TaskStatusID == taskStatusID).ToListAsync();

      if (existingTasks.Any())
      {
        foreach(var task in existingTasks)
        {
          _db.Tasks.Remove(task);
        }
        await _db.SaveChangesAsync();
      }

      var existingTaskStatus = await _db.TaskStatuses.Where(temp => temp.TaskStatusID == taskStatusID).FirstOrDefaultAsync();

      if (existingTaskStatus != null)
      {
        _db.TaskStatuses.Remove(existingTaskStatus);
        await _db.SaveChangesAsync();

        return NoContent();
      }
      else return NotFound();
    }
  }
}
