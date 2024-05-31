using GymTracker.Domain.Entities;
using GymTracker.Domain.Repositories;
using GymTracker.Infra.Data;

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
}
