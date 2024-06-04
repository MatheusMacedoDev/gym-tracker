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
}
