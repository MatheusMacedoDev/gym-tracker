namespace GymTracker.Application.Services.Contracts;

public record RegisterExerciseRequest(
    string exerciseName,
    string? exerciseGif,
    List<Guid> relatedMuscleGroupIds
);
