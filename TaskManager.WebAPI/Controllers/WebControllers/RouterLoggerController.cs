using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace TaskManager.WebAPI.Controllers.WebControllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class RouterLoggerController : ControllerBase
  {
    private readonly IWebHostEnvironment _webHostEnvironment;

    public RouterLoggerController(IWebHostEnvironment webHostEnvironment)
    {
      _webHostEnvironment = webHostEnvironment;
    }

    [HttpPost]
    public async Task<IActionResult> Index()
    {
      string? logMessage = null;
      using (StreamReader streamReader = new(Request.Body, Encoding.ASCII))
      {
        logMessage = await streamReader.ReadToEndAsync() + "\n";
      }
      string filePath = _webHostEnvironment.ContentRootPath + "\\RouterLogger.txt";
      System.IO.File.AppendAllText(filePath, logMessage);
      return Ok();
    }
  }
}
