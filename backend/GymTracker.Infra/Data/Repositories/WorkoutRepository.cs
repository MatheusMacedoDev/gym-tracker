using GymTracker.Domain.Entities;
using GymTracker.Domain.Repositories;
using GymTracker.Infra.Data;

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
}
