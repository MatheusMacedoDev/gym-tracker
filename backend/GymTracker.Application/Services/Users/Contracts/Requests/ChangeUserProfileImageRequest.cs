namespace GymTracker.Application.Services.Contracts.Requests;

public record ChangeUserProfileImageRequest
(
    Guid userId,
    IFormFile profileImageFile
);
