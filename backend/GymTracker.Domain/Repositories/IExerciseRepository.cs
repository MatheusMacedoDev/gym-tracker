using GymTracker.Domain.Entities;

namespace GymTracker.Domain.Repositories;

public interface IExerciseRepository
{
    Task RegisterMuscleGroup(MuscleGroup muscleGroup);
}
