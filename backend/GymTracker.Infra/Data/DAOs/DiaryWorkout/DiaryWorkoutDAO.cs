
using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace GymTracker.Infra.Data.DAOs.DiaryWorkout;

public class DiaryWorkoutDAO : IDiaryWorkoutDAO
{
    private readonly string _connectionString;

    public DiaryWorkoutDAO()
    {
        IConfigurationRoot config = new ConfigurationBuilder()
            .AddUserSecrets<DiaryWorkoutDAO>()
            .Build();

        _connectionString = config["ConnectionStrings:LocalHost"]!;
    }

    public async Task<DiaryWorkoutDTO> GetDiaryWorkoutByDateAndUser(string date, Guid userId)
    {
        try
        {
            using (var connection = new NpgsqlConnection(_connectionString))
            {
                string query = @"
                    SELECT 
                        DIW.diary_workout_id AS diaryWorkoutId,
                        DEW.workout_name AS workoutName
                    FROM diary_workouts AS DIW
                    JOIN default_workouts AS DEW
                        ON DEW.default_workout_id = DIW.default_workout_id
                    WHERE DEW.user_id = @userId AND DIW.workout_date = @date
                ";

                var dateTime = DateTime.Parse(date);

                return (await connection.QueryFirstOrDefaultAsync<DiaryWorkoutDTO>(query, new { userId, date = dateTime }))!;
            }
        }
        catch (Exception)
        {
            throw;
        }
    }
}
