namespace GymTracker.Utils.DTOs;

public record UserLoginDTO
(
    Guid userId,
    string userName,
    byte[] userHash,
    byte[] userSalt,
    string? profileImage,
    char gender
);
