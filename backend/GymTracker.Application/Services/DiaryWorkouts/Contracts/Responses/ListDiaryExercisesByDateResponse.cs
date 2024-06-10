using GymTracker.Infra.Data.DAOs.DiaryExercise;

namespace GymTracker.Application.Services.Contracts.Responses;

public record ListDiaryExercisesByDateResponse(
    Guid diaryWorkoutId,
    string workoutName,
    IEnumerable<DiaryExerciseDTO>? diaryExercises
);
