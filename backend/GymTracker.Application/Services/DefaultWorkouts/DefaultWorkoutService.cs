using GymTracker.Application.Services.Contracts;
using GymTracker.Domain.Repositories;
using GymTracker.Infra.Data.UnityOfWork;
using GymTracker.Domain.Entities;
using GymTracker.Infra.Data.DAOs.DefaultWorkout;

namespace GymTracker.Application.Services;

public class DefaultWorkoutService : IDefaultWorkoutService
{
    private readonly IWorkoutRepository _workoutRepository;
    private readonly IUnityOfWork _unityOfWork;

    private readonly IDefaultWorkoutDAO _defaultWorkoutDAO;

    public DefaultWorkoutService(IWorkoutRepository workoutRepository, IUnityOfWork unityOfWork, IDefaultWorkoutDAO defaultWorkoutDAO)
    {
        _workoutRepository = workoutRepository;
        _unityOfWork = unityOfWork;
        _defaultWorkoutDAO = defaultWorkoutDAO;
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

    public async Task<IEnumerable<DefaultWorkoutListItemDTO>> ListDefaultWorkoutByUserId(Guid userId)
    {
        return await _defaultWorkoutDAO.ListDefaultWorkoutsByUserId(userId);
    }
}
