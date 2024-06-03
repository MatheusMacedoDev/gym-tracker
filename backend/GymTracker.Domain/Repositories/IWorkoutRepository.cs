using GymTracker.Domain.Entities;

namespace GymTracker.Domain.Repositories;

public interface IWorkoutRepository
{
    Task CreateDefaultWorkout(DefaultWorkout defaultWorkout);
    Task DeleteDefaultWorkoutById(DefaultWorkout defaultWorkout);
    Task<DefaultWorkout> GetDefaultWorkoutById(Guid defaultWorkoutId);
}
