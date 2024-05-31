using GymTracker.Application.Services.Contracts;

namespace GymTracker.Application.Services;

public interface IExerciseService
{
    Task<RegisterMuscleGroupResponse> RegisterMuscleGroup(RegisterMuscleGroupRequest request);
}
