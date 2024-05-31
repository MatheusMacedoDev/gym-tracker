using GymTracker.Domain.Entities;
using GymTracker.Domain.Repositories;
using GymTracker.Infra.Data;

namespace GymTracker.Infra.Repositories;

public class ExerciseRepository : IExerciseRepository
{
    private readonly DataContext _context;

    public ExerciseRepository(DataContext context)
    {
        _context = context;
    }

    public async Task RegisterMuscleGroup(MuscleGroup muscleGroup)
    {
        await _context.MuscleGroups!.AddAsync(muscleGroup);
    }
}
