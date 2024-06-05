namespace GymTracker.Infra.Data.DAOs.DiaryExercise;

public record DiaryExerciseDTO
(
    Guid diaryExerciseId,
    string exerciseName,
    string exerciseGif,
    string repetitionsRange,
    short originalSeriesAmount,
    short doneSeriesAmount
);
