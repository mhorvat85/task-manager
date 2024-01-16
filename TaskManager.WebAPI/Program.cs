using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using TaskManager.Core.Identity;
using TaskManager.Infrastructure.DatabaseContext;
using TaskManager.WebAPI.ServiceContracts;
using TaskManager.WebAPI.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

builder.Services.AddTransient<IUsersService, UsersService>();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
  options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddIdentity<ApplicationUser, ApplicationRole>(options =>
{
  options.Password.RequiredLength = 5;
  options.Password.RequireNonAlphanumeric = false;
  options.Password.RequireUppercase = false;
  options.Password.RequireDigit = false;
})
  .AddEntityFrameworkStores<ApplicationDbContext>()
  .AddUserStore<UserStore<ApplicationUser, ApplicationRole, ApplicationDbContext, Guid>>()
  .AddRoleStore<RoleStore<ApplicationRole, ApplicationDbContext, Guid>>();

builder.Services.AddAuthentication()
  .AddJwtBearer(options =>
  {
    options.TokenValidationParameters = new TokenValidationParameters()
    {
      ValidateAudience = true,
      ValidAudience = builder.Configuration["Jwt:Audience"],
      ValidateIssuer = true,
      ValidIssuer = builder.Configuration["Jwt:Issuer"],
      ValidateLifetime = true,
      ValidateIssuerSigningKey = true,
      IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Secret"]!))
    };
  });

builder.Services.AddCors(options =>
{
  options.AddDefaultPolicy(policyBuilder =>
  {
    policyBuilder
    .WithOrigins(builder.Configuration.GetSection("AllowedOrigins").Get<string[]>()!)
    .WithHeaders("content-type", "authorization", "origin")
    .AllowAnyMethod();
  });
});

var app = builder.Build();

using (IServiceScope scope = app.Services.CreateScope())
{
  var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<ApplicationRole>>();
  var userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();

  if (!await roleManager.RoleExistsAsync("Admin"))
  {
    ApplicationRole role = new() { Name = "Admin" };
    await roleManager.CreateAsync(role);
  }

  if ((await userManager.FindByNameAsync("admin")) == null)
  {
    ApplicationUser user = new() { UserName = "admin", Email = "admin@example.com" };
    IdentityResult dbUser = await userManager.CreateAsync(user, "Admin123#");
    if (dbUser.Succeeded)
    {
      await userManager.AddToRoleAsync(user, "Admin");
    }
  }
  
  if (!await roleManager.RoleExistsAsync("Employee"))
  {
    ApplicationRole role = new() { Name = "Employee" };
    await roleManager.CreateAsync(role);
  }
}

if (builder.Environment.IsDevelopment())
{
  app.UseDeveloperExceptionPage();
}

app.UseHsts();
app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseCors();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
