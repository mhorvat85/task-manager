using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TaskManager.Core.Entities;
using TaskManager.Core.Identity;

namespace TaskManager.Infrastructure.DatabaseContext
{
  public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, Guid>
  {
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Project> Projects { get; set; }
    public DbSet<ClientLocation> ClientLocations { get; set; }
    public DbSet<Country> Countries { get; set; }
    public DbSet<Skill> Skills { get; set; }
    public DbSet<TaskPriority> TaskPriorities { get; set; }
    public DbSet<Core.Entities.TaskStatus> TaskStatuses { get; set; }
    public DbSet<Core.Entities.Task> Tasks { get; set; }
    public DbSet<TaskStatusDetail> TaskStatusDetails { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Core.Entities.Task>()
        .HasOne(c => c.AssignedToUser)
        .WithMany()
        .HasForeignKey(c => c.AssignedTo)
        .OnDelete(DeleteBehavior.Restrict);

      modelBuilder.Entity<Core.Entities.Task>()
        .HasOne(c => c.CreatedByUser)
        .WithMany()
        .HasForeignKey(c => c.CreatedBy)
        .OnDelete(DeleteBehavior.Restrict);

      base.OnModelCreating(modelBuilder);

      modelBuilder.Entity<Project>().HasData(
        new Project() { ProjectID = 1, ProjectName = "Hospital Management System", DateOfStart = Convert.ToDateTime("2024-1-1"), TeamSize = 15, Active = true, Status = "In Force", ClientLocationID = 2 },
        new Project() { ProjectID = 2, ProjectName = "Reporting Tool", DateOfStart = Convert.ToDateTime("2024-4-15"), TeamSize = 20, Active = true, Status = "Support", ClientLocationID = 1 }
      );

      modelBuilder.Entity<ClientLocation>().HasData(
        new ClientLocation() { ClientLocationID = 1, ClientLocationName = "Berlin" },
        new ClientLocation() { ClientLocationID = 2, ClientLocationName = "Paris" },
        new ClientLocation() { ClientLocationID = 3, ClientLocationName = "Sydney" },
        new ClientLocation() { ClientLocationID = 4, ClientLocationName = "New York" },
        new ClientLocation() { ClientLocationID = 5, ClientLocationName = "London" },
        new ClientLocation() { ClientLocationID = 6, ClientLocationName = "Tokyo" }
      );

      modelBuilder.Entity<Country>().HasData(
        new Country() { CountryID = 1, CountryName = "India" },
        new Country() { CountryID = 2, CountryName = "China" },
        new Country() { CountryID = 3, CountryName = "United States" },
        new Country() { CountryID = 4, CountryName = "Indonesia" },
        new Country() { CountryID = 5, CountryName = "Pakistan" },
        new Country() { CountryID = 6, CountryName = "Nigeria" },
        new Country() { CountryID = 7, CountryName = "Brazil" },
        new Country() { CountryID = 8, CountryName = "Bangladesh" },
        new Country() { CountryID = 9, CountryName = "Russia" },
        new Country() { CountryID = 10, CountryName = "Mexico" },
        new Country() { CountryID = 11, CountryName = "Ethiopia" },
        new Country() { CountryID = 12, CountryName = "Japan" },
        new Country() { CountryID = 13, CountryName = "Philippines" },
        new Country() { CountryID = 14, CountryName = "Egypt" },
        new Country() { CountryID = 15, CountryName = "DR Congo" },
        new Country() { CountryID = 16, CountryName = "Vietnam" },
        new Country() { CountryID = 17, CountryName = "Iran" },
        new Country() { CountryID = 18, CountryName = "Turkey" },
        new Country() { CountryID = 19, CountryName = "Germany" },
        new Country() { CountryID = 20, CountryName = "Thailand" },
        new Country() { CountryID = 21, CountryName = "United Kingdom" },
        new Country() { CountryID = 22, CountryName = "Tanzania" },
        new Country() { CountryID = 23, CountryName = "France" },
        new Country() { CountryID = 24, CountryName = "South Africa" },
        new Country() { CountryID = 25, CountryName = "Italy" },
        new Country() { CountryID = 26, CountryName = "Kenya" },
        new Country() { CountryID = 27, CountryName = "Myanmar" },
        new Country() { CountryID = 28, CountryName = "Colombia" },
        new Country() { CountryID = 29, CountryName = "South Korea" },
        new Country() { CountryID = 30, CountryName = "Uganda" },
        new Country() { CountryID = 31, CountryName = "Sudan" },
        new Country() { CountryID = 32, CountryName = "Spain" },
        new Country() { CountryID = 33, CountryName = "Argentina" },
        new Country() { CountryID = 34, CountryName = "Algeria" },
        new Country() { CountryID = 35, CountryName = "Iraq" },
        new Country() { CountryID = 36, CountryName = "Afghanistan" },
        new Country() { CountryID = 37, CountryName = "Poland" },
        new Country() { CountryID = 38, CountryName = "Canada" },
        new Country() { CountryID = 39, CountryName = "Morocco" },
        new Country() { CountryID = 40, CountryName = "Saudi Arabia" },
        new Country() { CountryID = 41, CountryName = "Ukraine" },
        new Country() { CountryID = 42, CountryName = "Angola" },
        new Country() { CountryID = 43, CountryName = "Uzbekistan" },
        new Country() { CountryID = 44, CountryName = "Yemen" },
        new Country() { CountryID = 45, CountryName = "Peru" },
        new Country() { CountryID = 46, CountryName = "Malaysia" },
        new Country() { CountryID = 47, CountryName = "Ghana" },
        new Country() { CountryID = 48, CountryName = "Mozambique" },
        new Country() { CountryID = 49, CountryName = "Nepal" },
        new Country() { CountryID = 50, CountryName = "Madagascar" },
        new Country() { CountryID = 51, CountryName = "Côte d'Ivoire" },
        new Country() { CountryID = 52, CountryName = "Venezuela" },
        new Country() { CountryID = 53, CountryName = "Cameroon" },
        new Country() { CountryID = 54, CountryName = "Niger" },
        new Country() { CountryID = 55, CountryName = "Australia" },
        new Country() { CountryID = 56, CountryName = "North Korea" },
        new Country() { CountryID = 57, CountryName = "Mali" },
        new Country() { CountryID = 58, CountryName = "Burkina Faso" },
        new Country() { CountryID = 59, CountryName = "Syria" },
        new Country() { CountryID = 60, CountryName = "Sri Lanka" },
        new Country() { CountryID = 61, CountryName = "Malawi" },
        new Country() { CountryID = 62, CountryName = "Zambia" },
        new Country() { CountryID = 63, CountryName = "Romania" },
        new Country() { CountryID = 64, CountryName = "Chile" },
        new Country() { CountryID = 65, CountryName = "Kazakhstan" },
        new Country() { CountryID = 66, CountryName = "Chad" },
        new Country() { CountryID = 67, CountryName = "Ecuador" },
        new Country() { CountryID = 68, CountryName = "Somalia" },
        new Country() { CountryID = 69, CountryName = "Guatemala" },
        new Country() { CountryID = 70, CountryName = "Senegal" },
        new Country() { CountryID = 71, CountryName = "Netherlands" },
        new Country() { CountryID = 72, CountryName = "Cambodia" },
        new Country() { CountryID = 73, CountryName = "Zimbabwe" },
        new Country() { CountryID = 74, CountryName = "Guinea" },
        new Country() { CountryID = 75, CountryName = "Rwanda" },
        new Country() { CountryID = 76, CountryName = "Benin" },
        new Country() { CountryID = 77, CountryName = "Burundi" },
        new Country() { CountryID = 78, CountryName = "Tunisia" },
        new Country() { CountryID = 79, CountryName = "Bolivia" },
        new Country() { CountryID = 80, CountryName = "Haiti" },
        new Country() { CountryID = 81, CountryName = "Belgium" },
        new Country() { CountryID = 82, CountryName = "Jordan" },
        new Country() { CountryID = 83, CountryName = "Dominican Republic" },
        new Country() { CountryID = 84, CountryName = "Cuba" },
        new Country() { CountryID = 85, CountryName = "South Sudan" },
        new Country() { CountryID = 86, CountryName = "Sweden" },
        new Country() { CountryID = 87, CountryName = "Honduras" },
        new Country() { CountryID = 88, CountryName = "Czech Republic (Czechia)" },
        new Country() { CountryID = 89, CountryName = "Azerbaijan" },
        new Country() { CountryID = 90, CountryName = "Greece" },
        new Country() { CountryID = 91, CountryName = "Papua New Guinea" },
        new Country() { CountryID = 92, CountryName = "Portugal" },
        new Country() { CountryID = 93, CountryName = "Hungary" },
        new Country() { CountryID = 94, CountryName = "Tajikistan" },
        new Country() { CountryID = 95, CountryName = "United Arab Emirates" },
        new Country() { CountryID = 96, CountryName = "Belarus" },
        new Country() { CountryID = 97, CountryName = "Israel" },
        new Country() { CountryID = 98, CountryName = "Togo" },
        new Country() { CountryID = 99, CountryName = "Austria" },
        new Country() { CountryID = 100, CountryName = "Switzerland" },
        new Country() { CountryID = 101, CountryName = "Sierra Leone" },
        new Country() { CountryID = 102, CountryName = "Laos" },
        new Country() { CountryID = 103, CountryName = "Serbia" },
        new Country() { CountryID = 104, CountryName = "Nicaragua" },
        new Country() { CountryID = 105, CountryName = "Libya" },
        new Country() { CountryID = 106, CountryName = "Paraguay" },
        new Country() { CountryID = 107, CountryName = "Kyrgyzstan" },
        new Country() { CountryID = 108, CountryName = "Bulgaria" },
        new Country() { CountryID = 109, CountryName = "Turkmenistan" },
        new Country() { CountryID = 110, CountryName = "El Salvador" },
        new Country() { CountryID = 111, CountryName = "Congo" },
        new Country() { CountryID = 112, CountryName = "Singapore" },
        new Country() { CountryID = 113, CountryName = "Denmark" },
        new Country() { CountryID = 114, CountryName = "Slovakia" },
        new Country() { CountryID = 115, CountryName = "Central African Republic" },
        new Country() { CountryID = 116, CountryName = "Finland" },
        new Country() { CountryID = 117, CountryName = "Norway" },
        new Country() { CountryID = 118, CountryName = "Liberia" },
        new Country() { CountryID = 119, CountryName = "State of Palestine" },
        new Country() { CountryID = 120, CountryName = "Lebanon" },
        new Country() { CountryID = 121, CountryName = "New Zealand" },
        new Country() { CountryID = 122, CountryName = "Costa Rica" },
        new Country() { CountryID = 123, CountryName = "Ireland" },
        new Country() { CountryID = 124, CountryName = "Mauritania" },
        new Country() { CountryID = 125, CountryName = "Oman" },
        new Country() { CountryID = 126, CountryName = "Panama" },
        new Country() { CountryID = 127, CountryName = "Kuwait" },
        new Country() { CountryID = 128, CountryName = "Croatia" },
        new Country() { CountryID = 129, CountryName = "Eritrea" },
        new Country() { CountryID = 130, CountryName = "Georgia" },
        new Country() { CountryID = 131, CountryName = "Mongolia" },
        new Country() { CountryID = 132, CountryName = "Moldova" },
        new Country() { CountryID = 133, CountryName = "Uruguay" },
        new Country() { CountryID = 134, CountryName = "Bosnia and Herzegovina" },
        new Country() { CountryID = 135, CountryName = "Albania" },
        new Country() { CountryID = 136, CountryName = "Jamaica" },
        new Country() { CountryID = 137, CountryName = "Armenia" },
        new Country() { CountryID = 138, CountryName = "Gambia" },
        new Country() { CountryID = 139, CountryName = "Lithuania" },
        new Country() { CountryID = 140, CountryName = "Qatar" },
        new Country() { CountryID = 141, CountryName = "Botswana" },
        new Country() { CountryID = 142, CountryName = "Namibia" },
        new Country() { CountryID = 143, CountryName = "Gabon" },
        new Country() { CountryID = 144, CountryName = "Lesotho" },
        new Country() { CountryID = 145, CountryName = "Guinea-Bissau" },
        new Country() { CountryID = 146, CountryName = "Slovenia" },
        new Country() { CountryID = 147, CountryName = "North Macedonia" },
        new Country() { CountryID = 148, CountryName = "Latvia" },
        new Country() { CountryID = 149, CountryName = "Equatorial Guinea" },
        new Country() { CountryID = 150, CountryName = "Trinidad and Tobago" },
        new Country() { CountryID = 151, CountryName = "Bahrain" },
        new Country() { CountryID = 152, CountryName = "Timor-Leste" },
        new Country() { CountryID = 153, CountryName = "Estonia" },
        new Country() { CountryID = 154, CountryName = "Mauritius" },
        new Country() { CountryID = 155, CountryName = "Cyprus" },
        new Country() { CountryID = 156, CountryName = "Eswatini" },
        new Country() { CountryID = 157, CountryName = "Djibouti" },
        new Country() { CountryID = 158, CountryName = "Fiji" },
        new Country() { CountryID = 159, CountryName = "Comoros" },
        new Country() { CountryID = 160, CountryName = "Guyana" },
        new Country() { CountryID = 161, CountryName = "Bhutan" },
        new Country() { CountryID = 162, CountryName = "Solomon Islands" },
        new Country() { CountryID = 163, CountryName = "Luxembourg" },
        new Country() { CountryID = 164, CountryName = "Montenegro" },
        new Country() { CountryID = 165, CountryName = "Suriname" },
        new Country() { CountryID = 166, CountryName = "Cabo Verde" },
        new Country() { CountryID = 167, CountryName = "Micronesia" },
        new Country() { CountryID = 168, CountryName = "Malta" },
        new Country() { CountryID = 169, CountryName = "Maldives" },
        new Country() { CountryID = 170, CountryName = "Brunei" },
        new Country() { CountryID = 171, CountryName = "Bahamas" },
        new Country() { CountryID = 172, CountryName = "Belize" },
        new Country() { CountryID = 173, CountryName = "Iceland" },
        new Country() { CountryID = 174, CountryName = "Vanuatu" },
        new Country() { CountryID = 175, CountryName = "Barbados" },
        new Country() { CountryID = 176, CountryName = "Sao Tome & Principe" },
        new Country() { CountryID = 177, CountryName = "Samoa" },
        new Country() { CountryID = 178, CountryName = "Saint Lucia" },
        new Country() { CountryID = 179, CountryName = "Kiribati" },
        new Country() { CountryID = 180, CountryName = "Grenada" },
        new Country() { CountryID = 181, CountryName = "Tonga" },
        new Country() { CountryID = 182, CountryName = "Seychelles" },
        new Country() { CountryID = 183, CountryName = "St. Vincent & Grenadines" },
        new Country() { CountryID = 184, CountryName = "Antigua and Barbuda" },
        new Country() { CountryID = 185, CountryName = "Andorra" },
        new Country() { CountryID = 186, CountryName = "Dominica" },
        new Country() { CountryID = 187, CountryName = "Saint Kitts & Nevis" },
        new Country() { CountryID = 188, CountryName = "Marshall Islands" },
        new Country() { CountryID = 189, CountryName = "Liechtenstein" },
        new Country() { CountryID = 190, CountryName = "Monaco" },
        new Country() { CountryID = 191, CountryName = "San Marino" },
        new Country() { CountryID = 192, CountryName = "Palau" },
        new Country() { CountryID = 193, CountryName = "Nauru" },
        new Country() { CountryID = 194, CountryName = "Tuvalu" },
        new Country() { CountryID = 195, CountryName = "Holy See" }
      );

      modelBuilder.Entity<TaskPriority>().HasData(
        new TaskPriority() { TaskPriorityID = 1, TaskPriorityName = "Urgent" },
        new TaskPriority() { TaskPriorityID = 2, TaskPriorityName = "Normal" },
        new TaskPriority() { TaskPriorityID = 3, TaskPriorityName = "Below Normal" },
        new TaskPriority() { TaskPriorityID = 4, TaskPriorityName = "Low" }
      );

      modelBuilder.Entity<Core.Entities.TaskStatus>().HasData(
        new Core.Entities.TaskStatus() { TaskStatusID = 1, TaskStatusName = "Holding" },
        new Core.Entities.TaskStatus() { TaskStatusID = 2, TaskStatusName = "Prioritized" },
        new Core.Entities.TaskStatus() { TaskStatusID = 3, TaskStatusName = "Started" },
        new Core.Entities.TaskStatus() { TaskStatusID = 4, TaskStatusName = "Finished" },
        new Core.Entities.TaskStatus() { TaskStatusID = 5, TaskStatusName = "Reverted" }
      );
    }
  }
}
