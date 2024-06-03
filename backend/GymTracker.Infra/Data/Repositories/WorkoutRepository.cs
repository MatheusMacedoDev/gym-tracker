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

    public Task DeleteDefaultWorkoutById(DefaultWorkout defaultWorkout)
    {
        _context.DefaultWorkouts!.Remove(defaultWorkout);

        return Task.CompletedTask;
    }

    public Task<DefaultWorkout> GetDefaultWorkoutById(Guid defaultWorkoutId)
    {
        return _context.DefaultWorkouts!
            .FirstOrDefaultAsync(workout => workout.DefaultWorkoutId == defaultWorkoutId)!;
    }

    public async Task CreateDiaryWorkout(DiaryWorkout diaryWorkout)
    {
        await _context.DiaryWorkouts!.AddAsync(diaryWorkout);
    }
}
