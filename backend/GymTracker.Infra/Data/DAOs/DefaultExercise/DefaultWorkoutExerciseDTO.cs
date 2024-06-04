namespace GymTracker.Infra.Data.DAOs.DefaultExercise;

public record DefaultWorkoutExerciseDTO(
    Guid defaultExerciseId,
    string exerciseName,
    string exerciseGif,
    string repetitionsRange,
    short seriesAmount
);
