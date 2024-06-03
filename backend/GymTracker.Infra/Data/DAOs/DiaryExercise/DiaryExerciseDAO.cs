
using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace GymTracker.Infra.Data.DAOs.DiaryExercise;

public class DiaryExerciseDAO : IDiaryExerciseDAO
{
    private readonly string _connectionString;

    public DiaryExerciseDAO()
    {
        IConfigurationRoot config = new ConfigurationBuilder()
            .AddUserSecrets<DiaryExerciseDAO>()
            .Build();

        _connectionString = config["ConnectionStrings:LocalHost"]!;
    }

    public async Task<IEnumerable<DiaryExerciseDTO>> ListDiaryExercisesByDate(string date, Guid userId)
    {
        try
        {
            using (var connection = new NpgsqlConnection(_connectionString))
            {
                string query = @"
                    SELECT 
                        DIE.diary_exercise_id AS diaryExerciseId,
                        E.exercise_name AS exerciseName,
                        E.exercise_gif AS exerciseGif,
                        DEE.repetitions_range AS repetitionsRange,
                        DEE.series_amount AS originalSeriesAmount,
                        (
                            SELECT 
                                COUNT(DES.diary_exercise_serie_id)::smallint
                            FROM diary_exercise_series AS DES
                            WHERE DES.diary_exercise_id = DIE.diary_exercise_id
                        ) AS doneSeriesAmount
                    FROM diary_exercises AS DIE
                    JOIN diary_workouts AS DIW
                        ON DIW.diary_workout_id = DIE.diary_workout_id
                    JOIN default_exercises AS DEE
                        ON DEE.default_exercise_id = DIE.default_exercise_Id
                    JOIN exercises AS E
                        ON E.exercise_id = DEE.exercise_id
                    JOIN default_workouts AS DEW
                        ON DEW.default_workout_id = DEE.default_workout_id
                    JOIN users AS U
                        ON U.user_id = DEW.user_id
                    WHERE U.user_id = @userId AND DIW.workout_date = @date
                ";

                var dateTime = DateTime.Parse(date);

                return await connection.QueryAsync<DiaryExerciseDTO>(query, new { userId, date = dateTime });
            }
        }
        catch (Exception)
        {
            throw;
        }
    }
}
