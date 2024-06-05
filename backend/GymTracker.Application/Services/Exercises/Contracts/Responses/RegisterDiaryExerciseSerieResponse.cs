namespace GymTracker.Application.Services.Contracts;

public record RegisterDiaryExerciseSerieResponse(
    Guid diaryExerciseSerieId,
    short serieNumber,
    short repetitions,
    short overload
);
