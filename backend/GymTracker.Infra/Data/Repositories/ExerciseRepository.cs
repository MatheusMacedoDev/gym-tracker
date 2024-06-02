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

    public async Task RegisterExercise(Exercise exercise)
    {
        await _context.Exercises!.AddAsync(exercise);
    }

    public async Task LinkExerciseAndMuscleGroup(ExerciseMuscleGroup exerciseMuscleGroup)
    {
        await _context.ExercisesMuscleGroups!.AddAsync(exerciseMuscleGroup);
    }

    public async Task RegisterDefaultExercise(DefaultExercise defaultExercise)
    {
        await _context.DefaultExercises!.AddAsync(defaultExercise);
    }
}
