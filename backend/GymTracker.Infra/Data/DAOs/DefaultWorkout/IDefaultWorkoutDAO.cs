namespace GymTracker.Infra.Data.DAOs.DefaultWorkout;

public interface IDefaultWorkoutDAO
{
    Task<IEnumerable<DefaultWorkoutListItemDTO>> ListDefaultWorkoutsByUserId(Guid userId);
}
