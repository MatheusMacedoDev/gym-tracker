using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GymTracker.Domain.Entities;

[Table("diary_exercises")]
public class DiaryExercise
{
    [Key]
    [Column("diary_exercise_id")]
    public Guid DiaryExerciseId { get; private set; }

    // Default Exercise Reference

    [Required]
    [Column("default_exercise_id")]
    public Guid DefaultExerciseId { get; private set; }

    [ForeignKey(nameof(DefaultExerciseId))]
    public DefaultExercise? DefaultExercise { get; private set; }

    // Diary Workout Reference

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

