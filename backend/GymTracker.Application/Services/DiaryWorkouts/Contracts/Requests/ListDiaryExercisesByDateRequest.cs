namespace GymTracker.Application.Services.Contracts.Requests;

public record ListDiaryExercisesByDateRequest(
    string date,
    Guid userId
);
