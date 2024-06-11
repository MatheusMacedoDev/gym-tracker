namespace GymTracker.Application.Services.Contracts.Responses;

public record ChangePasswordResponse
(
    bool success,
    string message
);