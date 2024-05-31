using GymTracker.Application.Services.Contracts;
using GymTracker.Domain.Entities;

namespace GymTracker.Application.Services;

public interface IDefaultWorkoutService
{
    Task<RegisterDefaultWorkoutResponse> RegisterDefaultWorkout(RegisterDefaultWorkoutRequest request);
    Task<List<DefaultWorkout>> ListDefaultWorkoutByUserId(Guid userId);
}
