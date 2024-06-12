namespace GymTracker.Application.Services.Contracts.Responses;

public record RegisterDiaryExerciseResponse (
    Guid diaryExerciseId,
    Guid defaultExerciseId,
    Guid diaryWorkoutId
);
