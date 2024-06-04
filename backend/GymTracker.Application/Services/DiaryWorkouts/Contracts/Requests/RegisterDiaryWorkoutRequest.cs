namespace GymTracker.Application.Services.DiaryWorkouts.Contracts.Requests
{
    public record RegisterDiaryWorkoutRequest
    (
        Guid defaultWorkoutId,
        DateOnly workoutDate
    );
}
