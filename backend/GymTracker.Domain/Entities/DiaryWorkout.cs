using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GymTracker.Domain.Entities;

[Table("exercise_muscle_group")]
public class DiaryWorkout
{
    [Key]
    [Column("diary_workout_id")]
    public Guid DiaryWorkoutId { get; private set; }

    [Required]
    [Column("default_workout_id")]
    public Guid DefaultWorkoutId { get; private set; }

    [ForeignKey(nameof(DefaultWorkoutId))]
    public DefaultWorkout? DefaultWorkout { get; private set; }

    [Required]
    [Column("workout_date")]
    public DateTime? WorkoutDate { get; private set; }

    protected DiaryWorkout()
    {
    }

    public DiaryWorkout(Guid defaultWorkoutId, DateTime workoutDate)
    {
        DiaryWorkoutId = Guid.NewGuid();
        DefaultWorkoutId = defaultWorkoutId;
        WorkoutDate = workoutDate;
    }
}

