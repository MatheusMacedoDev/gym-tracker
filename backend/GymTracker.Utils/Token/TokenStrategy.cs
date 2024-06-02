using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using GymTracker.Utils.DTOs;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace GymTracker.Utils.Token;

public class TokenStrategy : ITokenStrategy
{
    private readonly string SecurityKey;
    private readonly int TokenExpirationHours;

    public TokenStrategy()
    {
        IConfigurationRoot config = new ConfigurationBuilder()
            .AddUserSecrets<TokenStrategy>()
            .Build();

        SecurityKey = config["Token:SecurityKey"]!;
        TokenExpirationHours = int.Parse(config["Token:ExpirationHours"]!);
    }

    public string GenerateToken(UserLoginDTO user)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(SecurityKey);

        var tokenDescriptor = new SecurityTokenDescriptor()
        {
            Subject = new ClaimsIdentity(new Claim[] {
                new Claim(JwtRegisteredClaimNames.Jti, user.userId.ToString()),
                new Claim(ClaimTypes.Name, user.userName),
            }),
            Expires = DateTime.UtcNow.AddHours(TokenExpirationHours),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);

        return tokenHandler.WriteToken(token);
    }
}