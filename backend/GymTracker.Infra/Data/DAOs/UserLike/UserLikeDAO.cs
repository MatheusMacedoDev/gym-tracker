
using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace GymTracker.Infra.Data.DAOs.UserLike;

public class UserLikeDAO : IUserLikeDAO
{
    private readonly string _connectionString;

    public UserLikeDAO()
    {
        IConfigurationRoot config = new ConfigurationBuilder()
            .AddUserSecrets<UserLikeDAO>()
            .Build();

        _connectionString = config["ConnectionStrings:LocalHost"]!;
    }

    public async Task<int> LikesByUserId(Guid userId)
    {
        try
        {
            using (var connection = new NpgsqlConnection(_connectionString))
            {
                string query = @"
                    SELECT 
                        COUNT(DISTINCT sender_user_id) AS likes
                    FROM user_likes
                    WHERE receiver_user_id = @userId
                ";

                return (await connection.QueryFirstAsync<int>(query, new { userId }))!;
            }
        }
        catch (Exception)
        {
            throw;
        }
    }
}
