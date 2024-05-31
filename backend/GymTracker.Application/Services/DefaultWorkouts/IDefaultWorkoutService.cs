using GymTracker.Application.Services.Contracts;

namespace GymTracker.Application.Services;

public interface IDefaultWorkoutService
{
    Task<RegisterDefaultWorkoutResponse> RegisterDefaultWorkout(RegisterDefaultWorkoutRequest request);
}
