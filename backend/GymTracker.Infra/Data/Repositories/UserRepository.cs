using GymTracker.Domain.Entities;
using GymTracker.Domain.Repositories;
using GymTracker.Infra.Data;
using Microsoft.EntityFrameworkCore;

namespace GymTracker.Infra.Repositories;

public class UserRepository : IUserRepository
{
    private readonly DataContext _context;

    public UserRepository(DataContext context)
    {
        _context = context;
    }

    public async Task CreateUser(User user)
    {
        await _context.Users!.AddAsync(user);
    }

    public async Task CreateUserProfileHistory(ProfileHistory profileHistory)
    {
        await _context.ProfileHistories!.AddAsync(profileHistory);
    }

    public async Task<List<ProfileHistory>> ListUserProfileHistoryByUserId(Guid userId)
    {
        return await _context.ProfileHistories!.Where(profile => profile.UserId == userId).ToListAsync();
    }

    public async Task<User> GetUserById(Guid userId)
    {
        var user = (await _context.Users!.FirstOrDefaultAsync(user => user.UserId == userId))!;

        if (user == null)
            throw new KeyNotFoundException("User with this id was not found.");

        return user;
    }

    public async Task CreateUserLike(UserLike userLike)
    {
        await _context.UserLikes!.AddAsync(userLike);
    }

    public void RemoveUserLike(UserLike userLike)
    {
        _context.UserLikes!.Remove(userLike);
    }

    public async Task<UserLike> GetUserLikeById(Guid userLikeId)
    {
        return (await _context.UserLikes!.FirstOrDefaultAsync(userLike => userLike.UserLikeId == userLikeId))!;
    }

    public async Task<ProfileHistory> GetUserProfileHistoryById(Guid profileHistoryId)
    {
        return (await _context.ProfileHistories!.FirstOrDefaultAsync(profile => profile.ProfileHistoryId == profileHistoryId))!;
    }
}
