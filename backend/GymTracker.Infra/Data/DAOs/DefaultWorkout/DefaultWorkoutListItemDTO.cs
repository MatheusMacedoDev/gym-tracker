namespace GymTracker.Infra.Data.DAOs.DefaultWorkout;

public record DefaultWorkoutListItemDTO(
    Guid defaultWorkoutId,
    string defaultWorkoutName,
    string relatedMuscleGroups
);
