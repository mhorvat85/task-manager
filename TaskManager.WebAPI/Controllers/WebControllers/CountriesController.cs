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
  public class CountriesController : ControllerBase
  {
    private readonly ApplicationDbContext _db;

    public CountriesController(ApplicationDbContext db)
    {
      _db = db;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Country>>> GetCountries()
    {
      List<Country> countries = await _db.Countries.OrderBy(temp => temp.CountryName).ToListAsync();

      if (countries.Count > 0)
      {
        return countries;
      }
      else return NoContent();
    }

    [HttpGet("searchbycountryid/{countryID}")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public async Task<ActionResult<Country>> GetCountryByCountryID(int countryID)
    {
      Country? existingCountry = await _db.Countries.Where(temp => temp.CountryID == countryID).FirstOrDefaultAsync();

      if (existingCountry != null)
      {
        return existingCountry;
      }
      else return NotFound();
    }

    [HttpPost]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public async Task<ActionResult<Country>> InsertCountry(Country country)
    {
      await _db.Countries.AddAsync(country);
      await _db.SaveChangesAsync();

      Country? insertedCountry = await _db.Countries.Where(temp => temp.CountryID == country.CountryID).FirstOrDefaultAsync();

      if (insertedCountry != null)
      {
        return insertedCountry;
      }
      else return Problem("Inserted country record is null.");
    }

    [HttpPut]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public async Task<ActionResult<Country>> UpdateCountry(Country country)
    {
      Country? existingCountry = await _db.Countries.Where(temp => temp.CountryID == country.CountryID).FirstOrDefaultAsync();

      if (existingCountry != null)
      {
        existingCountry.CountryName = country.CountryName;
        await _db.SaveChangesAsync();

        return existingCountry;
      }
      else return NotFound();
    }

    [HttpDelete("{countryID}")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public async Task<IActionResult> DeleteCountry(int countryID)
    {
      Country? existingCountry = await _db.Countries.Where(temp => temp.CountryID == countryID).FirstOrDefaultAsync();

      if (existingCountry != null)
      {
        _db.Countries.Remove(existingCountry);
        await _db.SaveChangesAsync();

        return NoContent();
      }
      else return NotFound();
    }
  }
}
