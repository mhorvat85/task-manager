using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManager.Core.Entities;
using TaskManager.Infrastructure.DatabaseContext;

namespace TaskManager.WebAPI.Controllers.WebControllers
{
  [ApiController]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  public class TasksController : ControllerBase
  {
    private readonly ApplicationDbContext _db;

    public TasksController(ApplicationDbContext db)
    {
      _db = db;
    }

    [HttpGet("/api/tasks")]
    public async Task<IActionResult> GetTasks()
    {
      Guid currentUserId = Guid.Parse(User.Identity!.Name!);

      var tasks = await _db.Tasks
      .Include(temp => temp.Project).ThenInclude(temp => temp!.ClientLocation)
      .Include(temp => temp.CreatedByUser)
      .Include(temp => temp.AssignedToUser)
      .Include(temp => temp.TaskPriority)
      .Include(temp => temp.TaskStatusDetails)
      .Where(temp => temp.CreatedBy == currentUserId || temp.AssignedTo == currentUserId)
      .OrderBy(temp => temp.TaskPriorityID)
      .ThenByDescending(temp => temp.LastUpdatedOn).ToListAsync();

      if (tasks.Count > 0)
      {
        foreach (var task in tasks)
        {
          task.TaskStatusDetails = task.TaskStatusDetails!.OrderByDescending(temp => temp.TaskStatusDetailID).ToList();
        }

        var taskStatuses = await _db.TaskStatuses.ToListAsync();
        List<GroupedTask> groupedTasks = new();

        foreach (var taskstatus in taskStatuses)
        {
          GroupedTask groupedTask = new() { TaskStatusName = taskstatus.TaskStatusName, Tasks = tasks.Where(temp => temp.CurrentStatus == taskstatus.TaskStatusName).ToList() };

          if (groupedTask.Tasks.Count > 0)
          {
            groupedTasks.Add(groupedTask);
          }
        }

        return Ok(groupedTasks);
      }
      else return NoContent();

    }

    [HttpGet("/api/tasks/searchbytaskid/{taskID}")]
    public async Task<IActionResult> GetTaskByTaskID(int taskID)
    {
      var task = await _db.Tasks
      .Include(temp => temp.CreatedByUser)
      .Include(temp => temp.AssignedToUser)
      .Include(temp => temp.Project).ThenInclude(temp => temp!.ClientLocation)
      .Include(temp => temp.TaskStatusDetails)
      .Include(temp => temp.TaskPriority)
      .Where(temp => temp.TaskID == taskID)
      .FirstOrDefaultAsync();

      if (task != null)
      {
        return Ok(task);
      }
      else return NoContent();
    }

    [HttpPost("/api/createtask")]
    public async Task<IActionResult?> InsertTask(Core.Entities.Task task)
    {
      task.CreatedOn = DateTime.Now;
      task.LastUpdatedOn = DateTime.Now;
      task.CurrentStatus = "Holding";
      task.TaskStatusID = 1;
      task.CreatedBy = Guid.Parse(User.Identity!.Name!);
      await _db.Tasks.AddAsync(task);
      await _db.SaveChangesAsync();

      var insertedTask = await _db.Tasks.Where(temp => temp.TaskID == task.TaskID).FirstOrDefaultAsync();

      if (insertedTask != null)
      {
        TaskStatusDetail taskStatusDetail = new() { TaskID = insertedTask.TaskID, TaskStatusID = insertedTask.TaskStatusID, Id = insertedTask.CreatedBy, Description = "Task Created", StatusUpdationDateTime = insertedTask.LastUpdatedOn, TaskStatus = null, User = null };
        await _db.TaskStatusDetails.AddAsync(taskStatusDetail);
        await _db.SaveChangesAsync();

        return Ok(insertedTask);
      }
      else return null;
    }

    [HttpPut("/api/updatetaskstatus")]
    public async Task<IActionResult> UpdateTaskStatus(TaskStatusDetail taskStatusDetail)
    {
      taskStatusDetail.Id = Guid.Parse(User.Identity!.Name!);
      taskStatusDetail.StatusUpdationDateTime = DateTime.Now;
      await _db.TaskStatusDetails.AddAsync(taskStatusDetail);
      await _db.SaveChangesAsync();

      var existingTask = await _db.Tasks.Where(temp => temp.TaskID == taskStatusDetail.TaskID).FirstOrDefaultAsync();

      if (existingTask != null)
      {
        existingTask.LastUpdatedOn = DateTime.Now;
        existingTask.CurrentStatus = (await _db.TaskStatuses.Where(temp => temp.TaskStatusID == taskStatusDetail.TaskStatusID).FirstOrDefaultAsync())!.TaskStatusName;
        existingTask.TaskStatusID = taskStatusDetail.TaskStatusID;
        await _db.SaveChangesAsync();

        return Ok(taskStatusDetail);
      }
      else return NotFound();
    }

    [HttpPut("/api/edittask")]
    public async Task<IActionResult?> EditTask(Core.Entities.Task task)
    {
      var existingTask = await _db.Tasks.Where(temp => temp.TaskID == task.TaskID).FirstOrDefaultAsync();

      if (existingTask != null)
      {
        existingTask.TaskName = task.TaskName;
        existingTask.Description = task.Description;
        existingTask.CreatedOn = DateTime.Now;
        existingTask.AssignedTo = task.AssignedTo;
        existingTask.TaskPriorityID = task.TaskPriorityID;
        existingTask.LastUpdatedOn = DateTime.Now;
        existingTask.CurrentStatus = "Reverted";
        existingTask.TaskStatusID = 5;
        await _db.SaveChangesAsync();

        var updatedTask = await _db.Tasks.Where(temp => temp.TaskID == existingTask.TaskID).FirstOrDefaultAsync();

        if (updatedTask != null)
        {
          TaskStatusDetail taskStatusDetail = new() { TaskID = updatedTask.TaskID, TaskStatusID = updatedTask.TaskStatusID, Id = updatedTask.CreatedBy, Description = "Task Edited", StatusUpdationDateTime = updatedTask.LastUpdatedOn, TaskStatus = null, User = null };
          await _db.TaskStatusDetails.AddAsync(taskStatusDetail);
          await _db.SaveChangesAsync();

          return Ok(updatedTask);
        }
        else return null;
      }
      else return NotFound();
    }

    [HttpDelete("/api/deletetask/{taskID}")]
    public async Task<IActionResult> DeleteTask(int taskID)
    {
      var existingTask = await _db.Tasks.Where(temp => temp.TaskID == taskID).FirstOrDefaultAsync();
      var existingTaskStatusDetails = await _db.TaskStatusDetails.Where(temp => temp.TaskID == taskID).ToListAsync();

      if (existingTask != null && existingTaskStatusDetails != null)
      {
        _db.Tasks.Remove(existingTask);
        _db.TaskStatusDetails.RemoveRange(existingTaskStatusDetails);
        await _db.SaveChangesAsync();

        return NoContent();
      }
      else return NotFound();
    }
  }
}
