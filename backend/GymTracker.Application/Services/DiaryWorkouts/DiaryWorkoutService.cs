using GymTracker.Application.Services.DiaryWorkouts.Contracts.Requests;
using GymTracker.Domain.Entities;
using GymTracker.Domain.Repositories;
using GymTracker.Infra.Data.UnityOfWork;

namespace GymTracker.Application.Services.DiaryWorkouts;

public class DiaryWorkoutService : IDiaryWorkoutService
{
    private readonly IWorkoutRepository _workoutRepository;
    private readonly IUnityOfWork _unityOfWork;

    public DiaryWorkoutService(IWorkoutRepository workoutRepository, IUnityOfWork unityOfWork)
    {
        _workoutRepository = workoutRepository;
        _unityOfWork = unityOfWork;
    }

    public async Task RegisterDiaryWorkout(RegisterDiaryWorkoutRequest request)
    {
        try
        {
            var diatyWorkout = new DiaryWorkout(
                defaultWorkoutId: request.defaultWorkoutId,
                workoutDate: request.workoutDate
            );

            await _workoutRepository.CreateDiaryWorkout(diatyWorkout);
            await _unityOfWork.Commit();
        } 
        catch (Exception)
        {
            throw;
        }
    }
}
