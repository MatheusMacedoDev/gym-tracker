using GymTracker.Application.Services.Contracts;
using GymTracker.Domain.Repositories;
using GymTracker.Infra.Data.UnityOfWork;
using GymTracker.Domain.Entities;

namespace GymTracker.Application.Services;

public class DefaultWorkoutService : IDefaultWorkoutService
{
    private readonly IWorkoutRepository _workoutRepository;
    private readonly IUnityOfWork _unityOfWork;

    public DefaultWorkoutService(IWorkoutRepository workoutRepository, IUnityOfWork unityOfWork)
    {
        _workoutRepository = workoutRepository;
        _unityOfWork = unityOfWork;
    }

    public async Task<RegisterDefaultWorkoutResponse> RegisterDefaultWorkout(RegisterDefaultWorkoutRequest request)
    {
        try
        {
            var defaultWorkout = new DefaultWorkout(
                userId: request.userId,
                defaultWorkoutName: request.workoutName
            );

            await _workoutRepository.CreateDefaultWorkout(defaultWorkout);
            await _unityOfWork.Commit();

            var response = new RegisterDefaultWorkoutResponse(
                workoutName: defaultWorkout.DefaultWorkoutName!
            );

            return response;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<List<DefaultWorkout>> ListDefaultWorkoutByUserId(Guid userId)
    {
        return await _workoutRepository.ListDefaultWorkoutsByUserId(userId);
    }
}
