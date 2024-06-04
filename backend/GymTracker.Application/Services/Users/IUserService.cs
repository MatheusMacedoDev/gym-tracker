using GymTracker.Application.Services.Contracts.Requests;
using GymTracker.Application.Services.Contracts.Responses;

namespace GymTracker.Application;

public interface IUserService
{
    Task<RegisterUserResponse> RegisterUser(RegisterUserRequest request);
    Task<LoginResponse> Login(LoginRequest request);

    Task<RegisterProfileHistoryResponse> RegisterProfileHistory(RegisterProfileHistoryRequest request);
}
