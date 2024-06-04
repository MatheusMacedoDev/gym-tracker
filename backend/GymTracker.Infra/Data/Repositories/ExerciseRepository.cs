using GymTracker.Domain.Entities;
using GymTracker.Domain.Repositories;
using GymTracker.Infra.Data;
using Microsoft.EntityFrameworkCore;

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

    public async Task<List<MuscleGroup>> ListAllMuscleGroups()
    {
        return await _context.MuscleGroups!.ToListAsync();
    }

    public async Task<DefaultExercise> GetDefaultExerciseById(Guid defaultExerciseId)
    {
        return (await _context.DefaultExercises!
            .FirstOrDefaultAsync(exercise => exercise.DefaultExerciseId == defaultExerciseId))!;
    }

    public Task DeleteDefaultExercise(DefaultExercise defaultExercise)
    {
        _context.DefaultExercises!.Remove(defaultExercise);
        return Task.CompletedTask;
    }

    public async Task RegisterDiaryExercise(DiaryExercise diaryExercise)
    {
        await _context.DiaryExercises!.AddAsync(diaryExercise);
    }
}
