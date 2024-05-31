using GymTracker.Domain.Entities;
using GymTracker.Domain.Repositories;
using GymTracker.Infra.Data;
using Microsoft.EntityFrameworkCore;

namespace GymTracker.Infra.Repositories;

public class WorkoutRepository : IWorkoutRepository
{
    private readonly DataContext _context;

    public WorkoutRepository(DataContext context)
    {
        _context = context;
    }

    public async Task CreateDefaultWorkout(DefaultWorkout defaultWorkout)
    {
        await _context.DefaultWorkouts!.AddAsync(defaultWorkout);
    }

    public async Task<List<DefaultWorkout>> ListDefaultWorkoutsByUserId(Guid userId)
    {
        return await _context.DefaultWorkouts!
            .Where(workout => workout.UserId == userId)
            .ToListAsync();
    }
}
