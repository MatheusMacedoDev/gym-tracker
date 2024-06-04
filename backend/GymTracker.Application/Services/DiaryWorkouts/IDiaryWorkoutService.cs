using GymTracker.Application.Services.Contracts.Requests;
using GymTracker.Application.Services.DiaryWorkouts.Contracts.Requests;
using GymTracker.Infra.Data.DAOs.DiaryExercise;

namespace GymTracker.Application.Services.DiaryWorkouts;

public interface IDiaryWorkoutService
{
    Task RegisterDiaryWorkout(RegisterDiaryWorkoutRequest request);
    Task RegisterDiaryExercise(RegisterDiaryExerciseRequest request);

    Task<IEnumerable<DiaryExerciseDTO>> ListDiaryExercisesByDate(ListDiaryExercisesByDateRequest request);
}
