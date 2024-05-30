using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace GymTracker.Domain.Entities;

[Table("exercises")]
[Index(nameof(ExerciseName), IsUnique = true)]
public class Exercise
{
    [Key]
    [Column("exercise_id")]
    public Guid ExerciseId { get; private set; }

    [Required]
    [Column("exercise_name")]
    public string? ExerciseName { get; private set; }

    [Column("exercise_gif")]
    public string? ExerciseGif { get; private set; }

    protected Exercise()
    {
    }

    public Exercise(string exerciseName, string exerciseGif)
    {
        ExerciseId = Guid.NewGuid();
        ExerciseName = exerciseName;
        ExerciseGif = exerciseGif;
    }
}
