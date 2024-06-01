using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace GymTracker.Infra.Data.DAOs.Exercise;

public class ExerciseDAO : IExerciseDAO
{
    private readonly string _connectionString;

    public ExerciseDAO()
    {
        IConfigurationRoot config = new ConfigurationBuilder()
            .AddUserSecrets<ExerciseDAO>()
            .Build();

        _connectionString = config["ConnectionStrings:LocalHost"]!;
    }

    public async Task<IEnumerable<ExerciseDTO>> ListExercisesByMuscleGroupId(Guid muscleGroupId)
    {
        try
        {
            using (var connection = new NpgsqlConnection(_connectionString))
            {
                string query = @"
                    SELECT
                        E.exercise_id AS exerciseId,
                        E.exercise_name AS exerciseName,
                        E.exercise_gif AS exerciseGif
                    FROM exercise_muscle_group AS EMG
                    JOIN exercises AS E
                        ON E.exercise_id = EMG.exercise_id
                    WHERE EMG.muscle_group_id = @muscleGroupId
                ";

                return await connection.QueryAsync<ExerciseDTO>(query, new { muscleGroupId });
            }
        }
        catch (Exception)
        {
            throw;
        }
    }
}
