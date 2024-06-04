namespace GymTracker.Application.Services.DiaryWorkouts.Contracts.Requests
{
    public record RegisterDiaryExerciseRequest
    (
        Guid defaultExerciseId,
        Guid diaryWorkoutId
    );
}
