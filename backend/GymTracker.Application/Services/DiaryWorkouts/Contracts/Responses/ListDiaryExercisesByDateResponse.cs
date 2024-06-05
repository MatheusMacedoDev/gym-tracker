using GymTracker.Infra.Data.DAOs.DiaryExercise;

namespace GymTracker.Application.Services.Contracts.Responses;

public record ListDiaryExercisesByDateResponse(
    string workoutName,
    IEnumerable<DiaryExerciseDTO> diaryExercises
);
