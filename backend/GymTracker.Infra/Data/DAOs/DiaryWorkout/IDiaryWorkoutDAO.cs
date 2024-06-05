namespace GymTracker.Infra.Data.DAOs.DiaryWorkout;

public interface IDiaryWorkoutDAO
{
    Task<DiaryWorkoutDTO> GetDiaryWorkoutByDateAndUser(string date, Guid userId);
}
