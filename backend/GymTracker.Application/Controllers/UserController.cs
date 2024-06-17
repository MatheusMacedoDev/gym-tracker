using GymTracker.Application.Services.Contracts.Requests;
using GymTracker.Application.Services.Contracts.Responses;
using Microsoft.AspNetCore.Mvc;

namespace GymTracker.Application.Controllers;

[Route("api/users")]
[ApiController]
[Produces("application/json")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost]
    public async Task<IActionResult> RegisterUser([FromBody] RegisterUserRequest request)
    {
        try
        {
            var response = await _userService.RegisterUser(request);

            return StatusCode(201, response);
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }

    [HttpGet("profile_image")]
    public async Task<IActionResult> GetProfileImage(Guid userId)
    {
        try
        {
            var response = await _userService.GetProfileImage(userId);

            return Ok(response);
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }

    [HttpPatch("update_profile_image")]
    public async Task<IActionResult> UpdateProfileImage([FromForm] ChangeUserProfileImageRequest request)
    {
        try
        {
            var response = await _userService.ChangeUserProfileImage(request);

            return StatusCode(200, response);
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        try
        {
            var response = await _userService.Login(request);

            return Ok(response);
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }

    [HttpPost("profile_history")]
    public async Task<IActionResult> RegisterProfileHistory([FromForm] RegisterProfileHistoryRequest request)
    {
        try
        {
            var response = await _userService.RegisterProfileHistory(request);

            return StatusCode(201, response);
        }
        catch (Exception error)
        {
            return BadRequest(error.ToString());
        }
    }

    [HttpGet("profile_history")]
    public async Task<IActionResult> RegisterProfileHistory(Guid userId)
    {
        try
        {
            var response = await _userService.ListProfileHistoryByUserId(userId);

            return Ok(response);
        }
        catch (Exception error)
        {
            return BadRequest(error.ToString());
        }
    }

    [HttpGet("profile_history/have_permition_to_add")]
    public async Task<IActionResult> HavePermitionToAddProfileHistory(Guid userId)
    {
        try
        {
            var response = await _userService.CanAddProfileHistory(userId);

            return Ok(response);
        }
        catch (Exception error)
        {
            return BadRequest(error.ToString());
        }
    }

    [HttpPost("user_like")]
    public async Task<IActionResult> RegisterUserLike([FromBody] RegisterUserLikeRequest request)
    {
        try
        {
            var response = await _userService.RegisterUserLike(request);

            return StatusCode(201, response);
        }
        catch (Exception error)
        {
            return BadRequest(error.ToString());
        }
    }

    [HttpGet("likes_amount")]
    public async Task<IActionResult> GetLikesByUserId(Guid userId)
    {
        try
        {
            var response = await _userService.GetLikesByUserID(userId);

            return Ok(response);
        }
        catch (Exception error)
        {
            return BadRequest(error.ToString());
        }
    }

    [HttpGet("user_like")]
    public async Task<IActionResult> GetUserLikeBySenderAndReceiver(Guid senderUserId, Guid receiverUserId)
    {
        try
        {
            var userLikeId = await _userService.GetUserLikeIdBySenderAndReceiver(senderUserId, receiverUserId);

            if (userLikeId == Guid.Empty)
                return NotFound();

            return Ok(userLikeId);
        }
        catch (Exception error)
        {
            return BadRequest(error.ToString());
        }
    }

    [HttpDelete("user_like")]
    public async Task<IActionResult> DeleteUserLike(Guid userLikeId)
    {
        try
        {
            await _userService.RemoveUserLike(userLikeId);

            return NoContent();
        }
        catch (Exception error)
        {
            return BadRequest(error.ToString());
        }
    }

    [HttpGet("/api/rank/users/by_likes")]
    public async Task<IActionResult> ListRankedUsersByLikesAmount()
    {
        try
        {
            var response = await _userService.ListRankedUsersByLikesAmount();

            return Ok(response);
        }
        catch (Exception error)
        {
            return BadRequest(error.ToString());
        }
    }

    [HttpGet("/api/rank/users/by_latest_update")]
    public async Task<IActionResult> ListRankedUsersByLatestUpdate()
    {
        try
        {
            var response = await _userService.ListRankedUsersByLastProfileUpdate();

            return Ok(response);
        }
        catch (Exception error)
        {
            return BadRequest(error.ToString());
        }
    }

    [HttpPost("change_password")]
    public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        ChangePasswordResponse response = await _userService.ChangePassword(request);

        if (response.success)
        {
            return Ok(response);
        }

        return BadRequest(response);
    }
}
