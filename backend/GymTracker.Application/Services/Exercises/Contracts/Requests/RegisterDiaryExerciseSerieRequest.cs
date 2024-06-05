namespace GymTracker.Application.Services.Contracts;

public record RegisterDiaryExerciseSerieRequest(
    Guid diaryExerciseId,
    short serieNumber,
    short repetitions,
    short overload
);

