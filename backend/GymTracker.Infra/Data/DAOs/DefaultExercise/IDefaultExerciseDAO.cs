namespace GymTracker.Infra.Data.DAOs.DefaultExercise;

public interface IDefaultExerciseDAO
{
    Task<IEnumerable<DefaultWorkoutExerciseDTO>> ListExercisesByDefaultWorkout(Guid defaultWorkoutId);
}
