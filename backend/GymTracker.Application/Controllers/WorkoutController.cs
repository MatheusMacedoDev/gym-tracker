using GymTracker.Application.Services;
using GymTracker.Application.Services.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace GymTracker.Application.Controllers;

[Route("api/workouts")]
[ApiController]
[Produces("application/json")]
public class WorkoutController : ControllerBase
{
    private readonly IDefaultWorkoutService _defaultWorkoutService;

    public WorkoutController(IDefaultWorkoutService defaultWorkoutService)
    {
        _defaultWorkoutService = defaultWorkoutService;
    }

    [HttpPost("default_workout")]
    public async Task<IActionResult> RegisterDefaultWorkout([FromBody] RegisterDefaultWorkoutRequest request)
    {
        try
        {
            var response = await _defaultWorkoutService.RegisterDefaultWorkout(request);

            return StatusCode(201, response);
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }

    [HttpPost("default_workout/default_exercise")]
    public async Task<IActionResult> RegisterDefaultExercise([FromBody] RegisterDefaultExerciseRequest request)
    {
        try
        {
            await _defaultWorkoutService.RegisterDefaultExercise(request);

            return Created();
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }

    [HttpGet("default_workout")]
    public async Task<IActionResult> ListDefaultWorkoutBySpecificUser(Guid userId)
    {
        try
        {
            var response = await _defaultWorkoutService.ListDefaultWorkoutByUserId(userId);

            return Ok(response);
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }

    [HttpDelete("default_workout")]
    public async Task<IActionResult> DeleteDefaultWorkout(Guid defaultWorkoutId)
    {
        try
        {
            await _defaultWorkoutService.DeleteDefaultWorkout(defaultWorkoutId);

            return NoContent();
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }
}
