using Microsoft.AspNetCore.Mvc;

namespace TaskManager.WebAPI.Controllers
{
  [Route("[controller]/[action]")]
  public class HomeController : Controller
  {
    [Route("/")]
    public IActionResult Index()
    {
      return View();
    }
  }
}
