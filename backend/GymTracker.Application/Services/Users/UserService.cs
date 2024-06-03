using GymTracker.Application.Services.Contracts.Requests;
using GymTracker.Application.Services.Contracts.Responses;
using GymTracker.Domain.Entities;
using GymTracker.Domain.Repositories;
using GymTracker.Infra.Data.DAOs.User;
using GymTracker.Infra.Data.UnityOfWork;
using GymTracker.Utils.Cryptography;
using GymTracker.Utils.DTOs;
using GymTracker.Utils.Token;

namespace GymTracker.Application.Services;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    private readonly IUnityOfWork _unityOfWork;

    private readonly IUserDAO _userDAO;

    private readonly ICryptographyStrategy _cryptographyStrategy;
    private readonly ITokenStrategy _tokenStrategy;

    public UserService(IUserRepository userRepository, IUnityOfWork unityOfWork, ICryptographyStrategy cryptographyStrategy, IUserDAO userDAO, ITokenStrategy tokenStrategy)
    {
        _userRepository = userRepository;
        _unityOfWork = unityOfWork;

        _userDAO = userDAO;

        _cryptographyStrategy = cryptographyStrategy;
        _tokenStrategy = tokenStrategy;
    }

    public async Task<RegisterUserResponse> RegisterUser(RegisterUserRequest request)
    {
        User user = new User(
            email: request.email,
            plainPassword: request.password,
            name: request.name,
            birthYear: request.birthYear,
            gender: request.gender,
            cryptographyStrategy: _cryptographyStrategy!
        );

        await _userRepository!.CreateUser(user);
        await _unityOfWork!.Commit();

        var response = new RegisterUserResponse(
            name: user.Name!,
            email: user.Email!
        );

        return response;
    }

    public async Task<LoginResponse> Login(LoginRequest request)
    {
        try
        {
            UserLoginDTO findedUser = await _userDAO.GetUserByEmail(request.userEmail);

            if (findedUser == null)
                throw new Exception("Dados inválidos.");

            var hashMatching = _cryptographyStrategy.VerifyHashedPassword(request.userPassword, findedUser.userHash, findedUser.userSalt);

            if (!hashMatching)
                throw new Exception("Dados inválidos.");

            var loginToken = _tokenStrategy.GenerateToken(findedUser);

            return new LoginResponse(loginToken);
        }
        catch (Exception)
        {
            throw;
        }
    }
}
