namespace GymTracker.Infra.Data.DAOs.UserLike;

public interface IUserLikeDAO
{
    Task<int> LikesByUserId(Guid userId);
}
