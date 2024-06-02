using GymTracker.Domain.Entities;

namespace GymTracker.Domain.Repositories;

public interface IExerciseRepository
{
    Task RegisterMuscleGroup(MuscleGroup muscleGroup);
    Task RegisterExercise(Exercise exercise);
    Task RegisterDefaultExercise(DefaultExercise defaultExercise);

    Task LinkExerciseAndMuscleGroup(ExerciseMuscleGroup exerciseMuscleGroup);

    Task<List<MuscleGroup>> ListAllMuscleGroups();
}
