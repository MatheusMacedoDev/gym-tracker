namespace GymTracker.Infra.Data.DAOs.User;

public record RankUserDTO(
    Guid userId,
    string userName,
    string profilePhoto,
    int likes
);
