using GymTracker.Application.Services.Contracts;
using GymTracker.Application.Services.Contracts.Requests;
using GymTracker.Application.Services.Contracts.Responses;
using GymTracker.Application.Services.DiaryWorkouts.Contracts.Requests;
using GymTracker.Domain.Entities;
using GymTracker.Domain.Repositories;
using GymTracker.Infra.Data.DAOs.DiaryExercise;
using GymTracker.Infra.Data.DAOs.DiaryWorkout;
using GymTracker.Infra.Data.UnityOfWork;

namespace GymTracker.Application.Services.DiaryWorkouts;


public class DiaryWorkoutService : IDiaryWorkoutService
{
    private readonly IWorkoutRepository _workoutRepository;
    private readonly IExerciseRepository _exerciseRepository;

    private readonly IUnityOfWork _unityOfWork;

    private readonly IDiaryExerciseDAO _diaryExerciseDAO;
    private readonly IDiaryWorkoutDAO _diaryWorkoutDAO;

    public DiaryWorkoutService(IWorkoutRepository workoutRepository, IExerciseRepository exerciseRepository, IUnityOfWork unityOfWork, IDiaryExerciseDAO diaryExerciseDAO, IDiaryWorkoutDAO diaryWorkoutDAO)
    {
        _workoutRepository = workoutRepository;
        _exerciseRepository = exerciseRepository;

        _unityOfWork = unityOfWork;

        _diaryExerciseDAO = diaryExerciseDAO;
        _diaryWorkoutDAO = diaryWorkoutDAO;
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

    public async Task<ListDiaryExercisesByDateResponse> ListDiaryExercisesByDate(ListDiaryExercisesByDateRequest request)
    {
        try
        {
            var diaryWorkout = await _diaryWorkoutDAO.GetDiaryWorkoutByDateAndUser(
                date: request.date,
                userId: request.userId
            );

            if (diaryWorkout == null)
                return new ListDiaryExercisesByDateResponse("", null);

            var exercisesList = await _diaryExerciseDAO.ListDiaryExercisesByDate(
                date: request.date,
                userId: request.userId
            );

            var response = new ListDiaryExercisesByDateResponse(
                workoutName: diaryWorkout.workoutName,
                diaryExercises: exercisesList
            );

            return response;
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

    public async Task<RegisterDiaryExerciseSerieResponse> RegisterDiaryExerciseSerie(RegisterDiaryExerciseSerieRequest request)
    {
        try
        {
            var exerciseRegistry = new DiaryExerciseSerie(
                serieNumber: request.serieNumber,
                repetitions: request.repetitions,
                overload: request.overload,
                diaryExerciseId: request.diaryExerciseId
            );

            await _exerciseRepository.RegisterDiaryExerciseSerie(exerciseRegistry);

            await _unityOfWork.Commit();

            var response = new RegisterDiaryExerciseSerieResponse(
                diaryExerciseSerieId: exerciseRegistry.DiaryExerciseSerieId,
                serieNumber: exerciseRegistry.SerieNumber,
                repetitions: exerciseRegistry.Repetitions,
                overload: exerciseRegistry.Overload
            );

            return response;
        }
        catch (Exception)
        {
            throw;
        }
    }
}
