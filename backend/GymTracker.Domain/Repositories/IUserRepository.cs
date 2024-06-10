using GymTracker.Domain.Entities;
using System.ComponentModel.DataAnnotations;

namespace GymTracker.Domain.Repositories;

public interface IUserRepository
{
    Task CreateUser(User user);
    Task CreateUserProfileHistory(ProfileHistory profileHistory);
    Task CreateUserLike(UserLike userLike);

    void RemoveUserLike(UserLike userLike);

    Task<List<ProfileHistory>> ListUserProfileHistoryByUserId(Guid userId);
    Task<ProfileHistory> GetUserProfileHistoryById(Guid profileHistoryId);
    Task<User> GetUserById(Guid userId);
    Task<User> GetUserByEmail(string emailUser);
    Task<UserLike> GetUserLikeById(Guid userLikeId);
}
