namespace GymTracker.Application.Services.Contracts.Requests;

public record LoginRequest
(
    string userEmail,
    string userPassword
);
