using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GymTracker.Domain.Entities;

[Table("exercise_muscle_group")]
public class ExerciseMuscleGroup
{
    [Key]
    [Column("exercise_muscle_group_id")]
    public Guid ExerciseMuscleGroupId { get; private set; }

    // Muscle Group Reference

    [Required]
    [Column("muscle_group_id")]
    public Guid MuscleGroupId { get; private set; }

    [ForeignKey(nameof(MuscleGroupId))]
    public MuscleGroup? MuscleGroup { get; private set; }

    // Exercise Reference

    [Required]
    [Column("exercise_id")]
    public Guid ExerciseId { get; private set; }

    [ForeignKey(nameof(ExerciseId))]
    public Exercise? Exercise { get; private set; }

    protected ExerciseMuscleGroup()
    {
    }

    public ExerciseMuscleGroup(Guid muscleGroupId, Guid exerciseId)
    {
        ExerciseMuscleGroupId = Guid.NewGuid();
        MuscleGroupId = muscleGroupId;
        ExerciseId = exerciseId;
    }
}

