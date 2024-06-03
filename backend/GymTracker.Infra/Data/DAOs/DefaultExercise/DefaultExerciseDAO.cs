
using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace GymTracker.Infra.Data.DAOs.DefaultExercise;

public class DefaultExerciseDAO : IDefaultExerciseDAO
{
    private readonly string _connectionString;

    public DefaultExerciseDAO()
    {
        IConfigurationRoot config = new ConfigurationBuilder()
            .AddUserSecrets<DefaultExerciseDAO>()
            .Build();

        _connectionString = config["ConnectionStrings:LocalHost"]!;
    }

    public async Task<IEnumerable<DefaultWorkoutExerciseDTO>> ListExercisesByDefaultWorkout(Guid defaultWorkoutId)
    {
        try
        {
            using (var connection = new NpgsqlConnection(_connectionString))
            {
                string query = @"
                    SELECT 
                        DE.default_exercise_id AS defaultExerciseId, 
                        E.exercise_name AS exerciseName,
                        E.exercise_gif AS exerciseGif,
                        DE.repetitions_range AS repetitionsRange,
                        DE.series_amount AS seriesAmount
                    FROM default_exercises AS DE
                    JOIN exercises AS E
                        ON E.exercise_id = DE.exercise_id
                    WHERE DE.default_workout_id = @defaultWorkoutId
                ";

                return await connection.QueryAsync<DefaultWorkoutExerciseDTO>(query, new { defaultWorkoutId });
            }
        }
        catch (Exception)
        {
            throw;
        }
    }
}
