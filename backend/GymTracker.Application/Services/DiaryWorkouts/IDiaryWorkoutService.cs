using GymTracker.Application.Services.Contracts.Requests;
using GymTracker.Application.Services.Contracts.Responses;
using GymTracker.Application.Services.DiaryWorkouts.Contracts.Requests;
using GymTracker.Domain.Entities;
using GymTracker.Infra.Data.DAOs.DiaryExercise;

namespace GymTracker.Application.Services.DiaryWorkouts;

public interface IDiaryWorkoutService
{
    Task RegisterDiaryWorkout(RegisterDiaryWorkoutRequest request);
    Task RegisterDiaryExercise(RegisterDiaryExerciseRequest request);
    Task<ListDiaryExercisesByDateResponse> ListDiaryExercisesByDate(ListDiaryExercisesByDateRequest request);
    Task DeleteDiaryWorkout(Guid diaryWorkoutId);
}
