using GymTracker.Domain.Entities;

namespace GymTracker.Domain.Repositories;

public interface IUserRepository
{
    Task CreateUser(User user);
    Task CreateUserProfileHistory(ProfileHistory profileHistory);
    Task<List<ProfileHistory>> ListUserProfileHistoryByUserId(Guid userId);

    Task<User> GetUserById(Guid userId);
}
