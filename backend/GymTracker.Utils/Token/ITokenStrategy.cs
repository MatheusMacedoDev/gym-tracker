using GymTracker.Utils.DTOs;

namespace GymTracker.Utils.Token;

public interface ITokenStrategy
{
    string GenerateToken(UserLoginDTO user);
}
