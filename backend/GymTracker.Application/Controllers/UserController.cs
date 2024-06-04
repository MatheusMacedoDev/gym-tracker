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
    public async Task<IActionResult> RegisterProfileHistory([FromBody] RegisterProfileHistoryRequest request)
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
}
