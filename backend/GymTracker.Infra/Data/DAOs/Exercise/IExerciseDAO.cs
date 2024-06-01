namespace GymTracker.Infra.Data.DAOs.Exercise;

public interface IExerciseDAO
{
    Task<IEnumerable<ExerciseDTO>> ListExercisesByMuscleGroupId(Guid muscleGroupId);
}
