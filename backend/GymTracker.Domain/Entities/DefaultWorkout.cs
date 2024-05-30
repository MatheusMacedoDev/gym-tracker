using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace GymTracker.Domain.Entities;

[Table("exercise_muscle_group")]
[Index(nameof(DefaultWorkoutName), IsUnique = true)]
public class DefaultWorkout
{
    [Key]
    [Column("default_workout_id")]
    public Guid DefaultWorkoutId { get; private set; }

    [Required]
    [Column("user_id")]
    public Guid UserId { get; private set; }

    [ForeignKey(nameof(UserId))]
    public User? User { get; private set; }

    [Required]
    [Column("default_workout_name")]
    public string? DefaultWorkoutName { get; private set; }

    protected DefaultWorkout()
    {
    }

    public DefaultWorkout(Guid userId, string defaultWorkoutName)
    {
        DefaultWorkoutId = Guid.NewGuid();
        UserId = userId;
        DefaultWorkoutName = defaultWorkoutName; 
    }
}

