using GymTracker.Application.Services.Contracts;
using GymTracker.Domain.Entities;
using GymTracker.Domain.Repositories;
using GymTracker.Infra.Data.UnityOfWork;

namespace GymTracker.Application.Services;

public class ExerciseService : IExerciseService
{
    private readonly IExerciseRepository _exerciseRepository;
    private readonly IUnityOfWork _unityOfWork;

    public ExerciseService(IExerciseRepository exerciseRepository, IUnityOfWork unityOfWork)
    {
        _exerciseRepository = exerciseRepository;
        _unityOfWork = unityOfWork;
    }

    public async Task<RegisterMuscleGroupResponse> RegisterMuscleGroup(RegisterMuscleGroupRequest request)
    {
        try
        {
            var muscleGroup = new MuscleGroup(
                groupName: request.groupName,
                muscleImage: request.muscleImage
            );

            await _exerciseRepository.RegisterMuscleGroup(muscleGroup);
            await _unityOfWork.Commit();

            var response = new RegisterMuscleGroupResponse(
                muscleGroupId: muscleGroup.MucleGroupId,
                groupName: muscleGroup.GroupName!,
                muscleImage: muscleGroup.MuscleImage!
            );

            return response;
        }
        catch (Exception)
        {
            throw;
        }
    }
}
