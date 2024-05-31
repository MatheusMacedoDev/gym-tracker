using GymTracker.Domain.Entities;

namespace GymTracker.Domain.Repositories;

public interface IExerciseRepository
{
    Task RegisterMuscleGroup(MuscleGroup muscleGroup);
    Task RegisterExercise(Exercise exercise);
    Task LinkExerciseAndMuscleGroup(ExerciseMuscleGroup exerciseMuscleGroup);
}
