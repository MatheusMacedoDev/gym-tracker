using Flunt.Notifications;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace GymTracker.Infra.Data;

public class DataContext : DbContext
{
    private readonly string _connectionString;

    public DataContext()
    {
        IConfigurationRoot config = new ConfigurationBuilder()
            .AddUserSecrets<DataContext>()
            .Build();

        _connectionString = config["ConnectionStrings:LocalHost"]!;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(_connectionString);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Ignore<Notification>();
    }
}
