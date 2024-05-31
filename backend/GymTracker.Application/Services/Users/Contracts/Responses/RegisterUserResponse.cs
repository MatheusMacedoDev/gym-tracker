namespace GymTracker.Application.Services.Contracts.Responses;

public record RegisterUserResponse(
    string name,
    string email
);
