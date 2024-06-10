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
                        DW.default_workout_id AS defaultWorkoutId, 
                        DW.workout_name AS defaultWorkoutName,
                        STRING_AGG(DISTINCT MG.group_name, ', ') AS relatedMuscleGroups
                    FROM default_workouts AS DW
                    LEFT JOIN default_exercises AS DE
                        ON DE.default_workout_id = DW.default_workout_id
                    LEFT JOIN exercises AS E
                        ON E.exercise_id = DE.exercise_id
                    LEFT JOIN exercise_muscle_groups AS EMG
                        ON EMG.exercise_id = E.exercise_id
                    LEFT JOIN muscle_groups AS MG
                        ON MG.muscle_group_id = EMG.muscle_group_id
                    WHERE DW.user_id = @userId
                    GROUP BY DW.default_workout_id
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
