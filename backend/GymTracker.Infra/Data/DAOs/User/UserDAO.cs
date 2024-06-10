using Dapper;
using GymTracker.Utils.DTOs;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace GymTracker.Infra.Data.DAOs.User;

public class UserDAO : IUserDAO
{
    private readonly string _connectionString;

    public UserDAO()
    {
        IConfigurationRoot config = new ConfigurationBuilder()
            .AddUserSecrets<UserDAO>()
            .Build();

        _connectionString = config["ConnectionStrings:LocalHost"]!;
    }

    public async Task<UserLoginDTO> GetUserByEmail(string userEmail)
    {
        try
        {
            using (var connection = new NpgsqlConnection(_connectionString))
            {
                string query = @"
                    SELECT
                        users.user_id AS userId,
                        users.name AS userName,
                        users.password_hash AS userHash,
                        users.password_salt AS userSalt,
                        users.profile_photo AS profileImage,
                        users.gender AS gender
                    FROM users
                    WHERE users.email = @email
                ";

                return (await connection.QueryFirstOrDefaultAsync<UserLoginDTO>(query, new { email = userEmail }))!;
            }
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<IEnumerable<RankUserDTO>> RankUsersByLastProfileUpdate()
    {
        try
        {
            using (var connection = new NpgsqlConnection(_connectionString))
            {
                string query = @"
                    SELECT 
                        U.user_id AS userId,
                        U.name AS userName,
                        U.profile_photo AS profilePhoto,
                        COUNT(DISTINCT L.sender_user_id)::int AS likes
                    FROM users AS U
                    JOIN user_likes AS L
                        ON L.receiver_user_id = U.user_id
                    WHERE U.profile_updated_on IS NOT NULL
                    GROUP BY U.user_id
                    ORDER BY U.profile_updated_on DESC
                ";

                return (await connection.QueryAsync<RankUserDTO>(query))!;
            }
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<IEnumerable<RankUserDTO>> RankUsersByLikes()
    {
        try
        {
            using (var connection = new NpgsqlConnection(_connectionString))
            {
                string query = @"
                    SELECT 
                        U.user_id AS userId,
                        U.name AS userName,
                        U.profile_photo AS profilePhoto,
                        COUNT(DISTINCT L.sender_user_id)::int AS likes
                    FROM users AS U
                    JOIN user_likes AS L
                        ON L.receiver_user_id = U.user_id
                    GROUP BY U.user_id
                    ORDER BY likes DESC
                ";

                return (await connection.QueryAsync<RankUserDTO>(query))!;
            }
        }
        catch (Exception)
        {
            throw;
        }
    }
}
