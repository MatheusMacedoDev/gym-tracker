namespace GymTracker.Infra.Data.DAOs.ProfileHistory;

public interface IProfileHistoryDAO
{
    Task<IEnumerable<ProfileHistoryDTO>> ListProfileHistoriesByUserId(Guid userId);
}