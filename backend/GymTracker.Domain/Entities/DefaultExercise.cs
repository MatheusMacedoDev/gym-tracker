using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GymTracker.Domain.Entities;

[Table("default_exercises")]
public class DefaultExercise
{
    [Key]
    [Column("default_exercise_id")]
    public Guid DefaultExerciseId { get; private set; }

    [Required]
    [Column("repetitions_range")]
    public string? RepetitionsRange { get; private set; }

    [Required]
    [Column("series_amount")]
    public short SeriesAmount { get; private set; }

    // Exercise Reference

    [Required]
    [Column("exercise_id")]
    public Guid ExerciseId { get; private set; }

    [ForeignKey(nameof(ExerciseId))]
    public Exercise? Exercise { get; private set; }

    // Default Workout Reference

    [Required]
    [Column("default_workout_id")]
    public Guid DefaultWorkoutId { get; private set; }

    [ForeignKey(nameof(DefaultWorkoutId))]
    public DefaultWorkout? DefaultWorkout { get; private set; }

    protected DefaultExercise()
    {
    }

    public DefaultExercise(Guid exerciseId, Guid defaultWorkoutId, string repetitionsRange, short seriesAmount)
    {
        DefaultExerciseId = Guid.NewGuid();
        ExerciseId = exerciseId;
        DefaultWorkoutId = defaultWorkoutId;
        RepetitionsRange = repetitionsRange;
        SeriesAmount = seriesAmount;
    }
}
