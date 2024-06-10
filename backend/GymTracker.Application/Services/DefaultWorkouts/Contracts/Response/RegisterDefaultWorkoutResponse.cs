namespace GymTracker.Application.Services.Contracts;

public record RegisterDefaultWorkoutResponse(
    Guid defaultWorkoutId,
    string workoutName
);

