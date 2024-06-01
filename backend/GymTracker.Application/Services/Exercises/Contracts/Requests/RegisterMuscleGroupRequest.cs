namespace GymTracker.Application.Services.Contracts;

public record RegisterMuscleGroupRequest(
    string groupName,
    string? muscleImage
);
