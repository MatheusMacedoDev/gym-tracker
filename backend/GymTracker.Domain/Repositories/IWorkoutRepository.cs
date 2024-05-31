using GymTracker.Domain.Entities;

namespace GymTracker.Domain.Repositories;

public interface IWorkoutRepository
{
    Task CreateDefaultWorkout(DefaultWorkout defaultWorkout);
    Task<List<DefaultWorkout>> ListDefaultWorkoutsByUserId(Guid userId);
}
