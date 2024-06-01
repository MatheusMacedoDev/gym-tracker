namespace GymTracker.Application.Services.Contracts;

public record RegisterExerciseResponse(
    Guid exerciseId,
    string exerciseName,
    string? exerciseGif
);
