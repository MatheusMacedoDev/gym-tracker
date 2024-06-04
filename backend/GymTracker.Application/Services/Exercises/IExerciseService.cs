using GymTracker.Application.Services.Contracts;
using GymTracker.Domain.Entities;
using GymTracker.Infra.Data.DAOs.DefaultExercise;
using GymTracker.Infra.Data.DAOs.Exercise;

namespace GymTracker.Application.Services;

public interface IExerciseService
{
    Task<RegisterMuscleGroupResponse> RegisterMuscleGroup(RegisterMuscleGroupRequest request);
    Task<RegisterExerciseResponse> RegisterExercise(RegisterExerciseRequest request);
    Task<List<MuscleGroup>> ListAllMuscleGroups();
    Task<IEnumerable<ExerciseDTO>> ListExercisesByMuscleGroupId(Guid muscleGroupId);
    Task<IEnumerable<DefaultWorkoutExerciseDTO>> ListExercisesByDefaultWorkoutId(Guid defaultWorkoutId);
}
