using Dapper;
using GymTracker.Infra.Data.DAOs.Exercise;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace GymTracker.Infra.Data.DAOs.ProfileHistory;
public class ProfileHistoryDAO : IProfileHistoryDAO
{
    private readonly string _connectionString;

    public ProfileHistoryDAO()
    {
        IConfigurationRoot config = new ConfigurationBuilder()
            .AddUserSecrets<ExerciseDAO>()
            .Build();

        _connectionString = config["ConnectionStrings:LocalHost"]!;
    }
    public async Task<IEnumerable<ProfileHistoryDTO>> ListProfileHistoriesByUserId(Guid userId)
    {
        try
        {
            using (var connection = new NpgsqlConnection(_connectionString))
            {
                string query = @"
                    SELECT 
                        profile_history_id AS profileHistoryId,
	                    date AS profileDate,
                        weight,
                        height, 
                        abdominal_girth AS abdominalGirth, 
                        scapular_girth AS scapularGirth, 
                        hip_girth AS hipGirth, 
                        arm_girth AS armGirth, 
                        leg_girth AS legGirth, 
                        body_fat AS bodyFat, 
                        evolution_photo AS evolutionPhoto
                    FROM profile_histories
                    WHERE profile_histories.user_id = @userId
                ";

                var result = await connection.QueryAsync(query, new { userId });

                return await connection.QueryAsync<ProfileHistoryDTO>(query, new { userId });
            }
        }
        catch (Exception)
        {
            throw;
        }
    }
}
