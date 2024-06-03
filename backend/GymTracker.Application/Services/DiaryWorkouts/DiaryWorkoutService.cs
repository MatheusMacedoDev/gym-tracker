using GymTracker.Application.Services.DiaryWorkouts.Contracts.Requests;
using GymTracker.Domain.Entities;
using GymTracker.Domain.Repositories;
using GymTracker.Infra.Data.UnityOfWork;

namespace GymTracker.Application.Services.DiaryWorkouts;

public class DiaryWorkoutService : IDiaryWorkoutService
{
    private readonly IWorkoutRepository _workoutRepository;
    private readonly IExerciseRepository _exerciseRepository;
    private readonly IUnityOfWork _unityOfWork;

    public DiaryWorkoutService(IWorkoutRepository workoutRepository, IExerciseRepository exerciseRepository, IUnityOfWork unityOfWork)
    {
        _workoutRepository = workoutRepository;
        _exerciseRepository = exerciseRepository;
        _unityOfWork = unityOfWork;
    }

    public async Task RegisterDiaryExercise(RegisterDiaryExerciseRequest request)
    {
        try
        {
            var diaryExercise = new DiaryExercise(
                defaultExerciseId: request.defaultExerciseId,
                diaryWorkoutId: request.diaryWorkoutId
            );

            await _exerciseRepository.RegisterDiaryExercise(diaryExercise);
            await _unityOfWork.Commit();
        }
        catch (Exception)
        {
            throw;
        }
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
