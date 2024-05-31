using Flunt.Notifications;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

using GymTracker.Domain.Entities;

namespace GymTracker.Infra.Data;

public class DataContext : DbContext
{
    private readonly string _connectionString;

    public DbSet<User>? Users { get; set; }
    public DbSet<MuscleGroup>? MuscleGroups { get; set; }
    public DbSet<Exercise>? Exercises { get; set; }
    public DbSet<ExerciseMuscleGroup>? ExercisesMuscleGroups { get; set; }
    public DbSet<DefaultWorkout>? DefaultWorkouts { get; set; }
    public DbSet<DiaryWorkout>? DiaryWorkouts { get; set; }
    public DbSet<DefaultExercise>? DefaultExercises { get; set; }
    public DbSet<DiaryExercise>? DiaryExercises { get; set; }
    public DbSet<DiaryExerciseSerie>? DiaryExerciseSeries { get; set; }

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
