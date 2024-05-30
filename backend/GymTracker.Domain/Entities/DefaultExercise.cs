using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GymTracker.Domain.Entities;

[Table("exercise_muscle_group")]
public class DefaultExercise
{
    [Key]
    [Column("diary_workout_id")]
    public Guid DefaultExerciseId { get; private set; }

    [Required]
    [Column("exercise_id")]
    public Guid ExerciseId { get; private set; }

    [ForeignKey(nameof(ExerciseId))]
    public Exercise? Exercise { get; private set; }

    [Required]
    [Column("default_workout_id")]
    public Guid DefaultWorkoutId { get; private set; }

    [ForeignKey(nameof(DefaultWorkoutId))]
    public DefaultWorkout? DefaultWorkout { get; private set; }

    [Required]
    [Column("repetitions_range")]
    public string? RepetitionsRange { get; private set; }

    [Required]
    [Column("repetitions_range")]
    public short? Series { get; private set; }

    protected DefaultExercise()
    {
    }

    public DefaultExercise(Guid exerciseId, Guid defaultWorkoutId, string repetitionsRange, short series)
    {
        DefaultExerciseId = Guid.NewGuid();
        ExerciseId = exerciseId;
        DefaultWorkoutId = defaultWorkoutId;
        RepetitionsRange = repetitionsRange;
        Series = series;
    }
}

