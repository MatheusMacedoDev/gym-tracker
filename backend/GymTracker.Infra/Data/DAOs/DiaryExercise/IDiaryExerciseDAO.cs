namespace GymTracker.Infra.Data.DAOs.DiaryExercise;

public interface IDiaryExerciseDAO
{
    Task<IEnumerable<DiaryExerciseDTO>> ListDiaryExercisesByDate(string date, Guid userId);
}
