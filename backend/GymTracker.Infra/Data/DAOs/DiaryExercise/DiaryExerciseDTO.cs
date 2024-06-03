namespace GymTracker.Infra.Data.DAOs.DiaryExercise;
public record DiaryExerciseDTO
(
    Guid diaryExerciseId,
    string exerciseName,
    string exerciseGif,
    string muscleGroups,
    string repetitionsRange,
    short seriesAmount
);