using GymTracker.Application.Services.Contracts;
using GymTracker.Infra.Data.DAOs.Exercise;

namespace GymTracker.Application.Services;

public interface IExerciseService
{
    Task<RegisterMuscleGroupResponse> RegisterMuscleGroup(RegisterMuscleGroupRequest request);
    Task<RegisterExerciseResponse> RegisterExercise(RegisterExerciseRequest request);

    Task<IEnumerable<ExerciseDTO>> ListExercisesByMuscleGroupId(Guid muscleGroupId);
}