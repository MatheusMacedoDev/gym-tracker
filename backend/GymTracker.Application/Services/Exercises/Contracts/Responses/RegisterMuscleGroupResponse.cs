namespace GymTracker.Application.Services.Contracts;

public record RegisterMuscleGroupResponse(
    Guid muscleGroupId,
    string groupName,
    string muscleImage
);
