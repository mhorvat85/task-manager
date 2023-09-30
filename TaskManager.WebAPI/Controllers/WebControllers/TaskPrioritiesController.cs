using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManager.Core.Entities;
using TaskManager.Infrastructure.DatabaseContext;

namespace TaskManager.WebAPI.Controllers.WebControllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class TaskPrioritiesController : ControllerBase
  {
    private readonly ApplicationDbContext _db;

    public TaskPrioritiesController(ApplicationDbContext db)
    {
      _db = db;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<TaskPriority>>> GetTaskPriorities()
    {
      List<TaskPriority> taskPriorities = await _db.TaskPriorities.ToListAsync();

      if (taskPriorities.Count > 0)
      {
        return taskPriorities;
      }
      else return NoContent();
    }

    [HttpGet("searchbytaskpriorityid/{taskPriorityID}")]
    public async Task<ActionResult<TaskPriority>> GetTaskPriorityByTaskPriorityID(int taskPriorityID)
    {
      TaskPriority? existingTaskPriority = await _db.TaskPriorities.Where(temp => temp.TaskPriorityID == taskPriorityID).FirstOrDefaultAsync();

      if (existingTaskPriority != null)
      {
        return existingTaskPriority;
      }
      else return NoContent();
    }

    [HttpPost]
    public async Task<ActionResult<TaskPriority>> InsertTaskPriority(TaskPriority taskPriority)
    {
      await _db.TaskPriorities.AddAsync(taskPriority);
      await _db.SaveChangesAsync();

      TaskPriority? insertedTaskPriority = await _db.TaskPriorities.Where(temp => temp.TaskPriorityID == taskPriority.TaskPriorityID).FirstOrDefaultAsync();

      if (insertedTaskPriority != null)
      {
        return insertedTaskPriority;
      }
      else return Problem("Inserted task priority record is null.");
    }

    [HttpPut]
    public async Task<ActionResult<TaskPriority>> UpdateTaskPriority(TaskPriority taskPriority)
    {
      TaskPriority? existingTaskPriority = await _db.TaskPriorities.Where(temp => temp.TaskPriorityID == taskPriority.TaskPriorityID).FirstOrDefaultAsync();

      if (existingTaskPriority != null)
      {
        existingTaskPriority.TaskPriorityName = taskPriority.TaskPriorityName;
        await _db.SaveChangesAsync();

        return existingTaskPriority;
      }
      else return NotFound();
    }

    [HttpDelete]
    public async Task<IActionResult> DeleteTaskPriority(int taskPriorityID)
    {
      TaskPriority? existingTaskPriority = await _db.TaskPriorities.Where(temp => temp.TaskPriorityID == taskPriorityID).FirstOrDefaultAsync();

      if (existingTaskPriority != null)
      {
        _db.TaskPriorities.Remove(existingTaskPriority);
        await _db.SaveChangesAsync();

        return NoContent();
      }
      else return NotFound();
    }
  }
}
