namespace GymTracker.Application.Services.Contracts;

public record RegisterDefaultWorkoutRequest(
    Guid userId,
    string workoutName
);
