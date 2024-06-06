using GymTracker.Application.Services.Contracts.Requests;
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

    [HttpPatch("update_profile_image")]
    public async Task<IActionResult> UpdateProfileImage([FromForm] ChangeUserProfileImageRequest request)
    {
        try
        {
            var response = await _userService.ChangeUserProfileImage(request);

            return StatusCode(200, response);
        }
        catch (System.Exception)
        {

            throw;
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

    [HttpPost("user_like")]
    public async Task<IActionResult> RegisterUserLike([FromForm] RegisterUserLikeRequest request)
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

    [HttpGet("user_like/users")]
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
}
