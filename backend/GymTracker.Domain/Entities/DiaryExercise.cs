using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GymTracker.Domain.Entities;

[Table("exercise_muscle_group")]
public class DiaryExercise
{
    [Key]
    [Column("exercise_muscle_group_id")]
    public Guid DiaryExerciseId { get; private set; }

    [Required]
    [Column("default_exercise_id")]
    public Guid DefaultExerciseId { get; private set; }

    [ForeignKey(nameof(DefaultExerciseId))]
    public DefaultExercise? DefaultExercise { get; private set; }

    [Required]
    [Column("diary_workout_id")]
    public Guid DiaryWorkoutId { get; private set; }

    [ForeignKey(nameof(DiaryWorkoutId))]
    public DiaryWorkout? DiaryWorkout { get; private set; }

    protected DiaryExercise()
    {
    }

    public DiaryExercise(Guid defaultExerciseId, Guid diaryWorkoutId)
    {
        DiaryExerciseId = Guid.NewGuid();
        DefaultExerciseId = defaultExerciseId;
        DiaryWorkoutId = diaryWorkoutId;
    }
}

