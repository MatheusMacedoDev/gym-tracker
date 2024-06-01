using GymTracker.Application.Services.Contracts;
using GymTracker.Infra.Data.DAOs.DefaultWorkout;

namespace GymTracker.Application.Services;

public interface IDefaultWorkoutService
{
    Task<RegisterDefaultWorkoutResponse> RegisterDefaultWorkout(RegisterDefaultWorkoutRequest request);
    Task DeleteDefaultWorkout(Guid defaultWorkoutId);
    Task<IEnumerable<DefaultWorkoutListItemDTO>> ListDefaultWorkoutByUserId(Guid userId);
}
