namespace GymTracker.Application.Services.Contracts;

public record RegisterDefaultExerciseRequest(
    Guid exerciseId,
    Guid defaultWorkoutId,
    string repetitionsRange,
    short seriesAmount
);
