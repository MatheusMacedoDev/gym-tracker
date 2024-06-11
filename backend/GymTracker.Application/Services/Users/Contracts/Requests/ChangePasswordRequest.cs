namespace GymTracker.Application.Services.Contracts.Requests;

public record ChangePasswordRequest
(
    string userEmail,
    string newPassword,
    string passwordRecoverCode
);
