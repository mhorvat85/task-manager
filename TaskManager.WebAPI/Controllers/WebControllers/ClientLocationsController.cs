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
  public class ClientLocationsController : ControllerBase
  {
    private readonly ApplicationDbContext _db;

    public ClientLocationsController(ApplicationDbContext db)
    {
      _db = db;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ClientLocation>>> GetClientLocations()
    {
      List<ClientLocation> clientLocations = await _db.ClientLocations.OrderBy(temp => temp.ClientLocationName).ToListAsync();

      if (clientLocations.Count > 0)
      {
        return clientLocations;
      }
      else return NoContent();
    }

    [HttpGet("searchbyclientlocationid/{clientLocationID}")]
    public async Task<ActionResult<ClientLocation>> GetClientLocationByClientLocationID(int clientLocationID)
    {
      ClientLocation? existingClientLocation = await _db.ClientLocations.Where(temp => temp.ClientLocationID == clientLocationID).FirstOrDefaultAsync();

      if (existingClientLocation != null)
      {
        return existingClientLocation;
      }
      else return NoContent();
    }

    [HttpPost]
    public async Task<ActionResult<ClientLocation>> InsertClientLocation(ClientLocation clientLocation)
    {
      await _db.ClientLocations.AddAsync(clientLocation);
      await _db.SaveChangesAsync();

      ClientLocation? insertedClientLocation = await _db.ClientLocations.Where(temp => temp.ClientLocationID == clientLocation.ClientLocationID).FirstOrDefaultAsync();

      if (insertedClientLocation != null)
      {
        return insertedClientLocation;
      }
      else return Problem("Inserted client location record is null.");
    }

    [HttpPut]
    public async Task<ActionResult<ClientLocation>> UpdateClientLocation(ClientLocation clientLocation)
    {
      ClientLocation? existingClientLocation = await _db.ClientLocations.Where(temp => temp.ClientLocationID == clientLocation.ClientLocationID).FirstOrDefaultAsync();

      if (existingClientLocation != null)
      {
        existingClientLocation.ClientLocationName = clientLocation.ClientLocationName;
        await _db.SaveChangesAsync();

        return existingClientLocation;
      }
      else return NotFound();
    }

    [HttpDelete]
    public async Task<IActionResult> DeleteClientLocation(int clientLocationID)
    {
      ClientLocation? existingClientLocation = await _db.ClientLocations.Where(temp => temp.ClientLocationID == clientLocationID).FirstOrDefaultAsync();

      if (existingClientLocation != null)
      {
        _db.ClientLocations.Remove(existingClientLocation);
        await _db.SaveChangesAsync();

        return NoContent();
      }
      else return NotFound();
    }
  }
}
