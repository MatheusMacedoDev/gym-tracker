namespace GymTracker.Application.Services.Contracts.Requests;

public record RegisterUserRequest(
    string email,
    string password,
    string name,
    short birthYear,
    char gender
);
