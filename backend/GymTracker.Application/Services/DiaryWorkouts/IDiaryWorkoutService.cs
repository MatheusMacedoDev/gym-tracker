using GymTracker.Application.Services.DiaryWorkouts.Contracts.Requests;

namespace GymTracker.Application.Services.DiaryWorkouts;

public interface IDiaryWorkoutService
{
    Task RegisterDiaryWorkout(RegisterDiaryWorkoutRequest request);
}
