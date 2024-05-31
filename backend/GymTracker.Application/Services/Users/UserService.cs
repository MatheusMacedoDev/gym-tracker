using GymTracker.Application.Services.Contracts.Requests;
using GymTracker.Application.Services.Contracts.Responses;
using GymTracker.Domain.Entities;
using GymTracker.Domain.Repositories;
using GymTracker.Infra.Data.UnityOfWork;
using GymTracker.Utils.Cryptography;

namespace GymTracker.Application.Services;

public class UserService : IUserService
{
    private readonly IUserRepository? _userRepository;
    private readonly IUnityOfWork? _unityOfWork;
    private readonly ICryptographyStrategy? _cryptographyStrategy;

    public UserService(IUserRepository userRepository, IUnityOfWork unityOfWork, ICryptographyStrategy cryptographyStrategy)
    {
        _userRepository = userRepository;
        _unityOfWork = unityOfWork;
        _cryptographyStrategy = cryptographyStrategy;
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
}
