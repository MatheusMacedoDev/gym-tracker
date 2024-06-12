namespace GymTracker.Application.Services.Contracts.Responses;

public record RegisterDiaryWorkoutResponse (
    Guid diaryWorkoutId,
    Guid defaultWorkoutId,
    DateOnly? workoutDate
);
