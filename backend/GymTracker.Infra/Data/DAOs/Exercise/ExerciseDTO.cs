namespace GymTracker.Infra.Data.DAOs.Exercise;

public record ExerciseDTO(
    Guid exerciseId,
    string exerciseName,
    string exerciseGif
);
