using GymTracker.Application.Services.Contracts.Requests;
using GymTracker.Application.Services.Contracts.Responses;
using GymTracker.Infra.Data.DAOs.ProfileHistory;

namespace GymTracker.Application;

public interface IUserService
{
    Task<RegisterUserResponse> RegisterUser(RegisterUserRequest request);
    Task<ChangeUserProfileImageResponse> ChangeUserProfileImage(ChangeUserProfileImageRequest request);
    Task<LoginResponse> Login(LoginRequest request);
    Task<RegisterProfileHistoryResponse> RegisterProfileHistory(RegisterProfileHistoryRequest request);
    Task<IEnumerable<ProfileHistoryDTO>> ListProfileHistoryByUserId(Guid userId);
}
