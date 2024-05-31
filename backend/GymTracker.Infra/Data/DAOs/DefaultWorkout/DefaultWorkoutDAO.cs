using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace GymTracker.Infra.Data.DAOs.DefaultWorkout;

public class DefaultWorkoutDAO : IDefaultWorkoutDAO
{
    private readonly string _connectionString;

    public DefaultWorkoutDAO()
    {
        IConfigurationRoot config = new ConfigurationBuilder()
            .AddUserSecrets<DefaultWorkoutDAO>()
            .Build();

        _connectionString = config["ConnectionStrings:LocalHost"]!;
    }

    public async Task<IEnumerable<DefaultWorkoutListItemDTO>> ListDefaultWorkoutsByUserId(Guid userId)
    {
        try
        {
            using (var connection = new NpgsqlConnection(_connectionString))
            {
                string query = @"
                    SELECT 
                        default_workout_id AS defaultWorkoutId, 
                        workout_name AS defaultWorkoutName
                    FROM default_workouts
                    WHERE user_id = @userId
                ";

                return await connection.QueryAsync<DefaultWorkoutListItemDTO>(query, new { userId });
            }
        }
        catch (Exception)
        {
            throw;
        }
    }
}
