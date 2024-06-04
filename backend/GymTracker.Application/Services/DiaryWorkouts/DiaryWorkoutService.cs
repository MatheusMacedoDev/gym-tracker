using GymTracker.Application.Services.Contracts.Requests;
using GymTracker.Application.Services.DiaryWorkouts.Contracts.Requests;
using GymTracker.Domain.Entities;
using GymTracker.Domain.Repositories;
using GymTracker.Infra.Data.DAOs.DiaryExercise;
using GymTracker.Infra.Data.UnityOfWork;

namespace GymTracker.Application.Services.DiaryWorkouts;


public class DiaryWorkoutService : IDiaryWorkoutService
{
    private readonly IWorkoutRepository _workoutRepository;
    private readonly IExerciseRepository _exerciseRepository;

    private readonly IUnityOfWork _unityOfWork;

    private readonly IDiaryExerciseDAO _diaryExerciseDAO;

    public DiaryWorkoutService(IWorkoutRepository workoutRepository, IExerciseRepository exerciseRepository, IUnityOfWork unityOfWork, IDiaryExerciseDAO diaryExerciseDAO)
    {
        _workoutRepository = workoutRepository;
        _exerciseRepository = exerciseRepository;

        _unityOfWork = unityOfWork;

        _diaryExerciseDAO = diaryExerciseDAO;
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

    public async Task<IEnumerable<DiaryExerciseDTO>> ListDiaryExercisesByDate(ListDiaryExercisesByDateRequest request)
    {
        try
        {
            var exercisesList = await _diaryExerciseDAO.ListDiaryExercisesByDate(
                date: request.date,
                userId: request.userId
            );

            return exercisesList;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task DeleteDiaryWorkout(Guid diaryWorkoutId)
    {
        try
        {
            var diaryWorkout = await _workoutRepository.GetDiaryWorkoutById(diaryWorkoutId);
            await _workoutRepository.DeleteDiaryWorkoutById(diaryWorkout);
            await _unityOfWork.Commit();
        }
        catch (Exception)
        {
            throw;
        }
    }
}
