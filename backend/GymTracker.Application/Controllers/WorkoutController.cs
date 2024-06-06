using GymTracker.Application.Services;
using GymTracker.Application.Services.Contracts;
using GymTracker.Application.Services.Contracts.Requests;
using GymTracker.Application.Services.DiaryWorkouts;
using GymTracker.Application.Services.DiaryWorkouts.Contracts.Requests;
using Microsoft.AspNetCore.Mvc;

namespace GymTracker.Application.Controllers;

[Route("api/workouts")]
[ApiController]
[Produces("application/json")]
public class WorkoutController : ControllerBase
{
    private readonly IDefaultWorkoutService _defaultWorkoutService;
    private readonly IDiaryWorkoutService _diaryWorkoutService;
    private readonly IExerciseService _exerciseService;

    public WorkoutController(IDefaultWorkoutService defaultWorkoutService, IDiaryWorkoutService diaryWorkoutService, IExerciseService exerciseService)
    {
        _defaultWorkoutService = defaultWorkoutService;
        _diaryWorkoutService = diaryWorkoutService;
        _exerciseService = exerciseService;
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

    [HttpPost("default_workout/exercise")]
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

    [HttpPost("diary_workout/exercise")]
    public async Task<IActionResult> RegisterDiaryExercise([FromBody] RegisterDiaryExerciseRequest request)
    {
        try
        {
            await _diaryWorkoutService.RegisterDiaryExercise(request);

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

    [HttpGet("default_workout/exercise")]
    public async Task<IActionResult> ListExercisesByDefaultWorkoutId(Guid defaultWorkoutId)
    {
        try
        {
            var response = await _exerciseService.ListExercisesByDefaultWorkoutId(defaultWorkoutId);

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

    [HttpDelete("diary_workout")]
    public async Task<IActionResult> DeleteDiaryWorkout(Guid diaryWorkoutId)
    {
        try
        {
            await _diaryWorkoutService.DeleteDiaryWorkout(diaryWorkoutId);
            return NoContent();
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }

    [HttpDelete("default_exercise")]
    public async Task<IActionResult> DeleteDefaultExcercise(Guid defaultExerciseId)
    {
        try
        {
            await _defaultWorkoutService.DeleteDefaultExercise(defaultExerciseId);

            return NoContent();
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }

    [HttpPost("diary_workout")]
    public async Task<IActionResult> RegisterDiaryWorkout([FromBody] RegisterDiaryWorkoutRequest request)
    {
        try
        {
            await _diaryWorkoutService.RegisterDiaryWorkout(request);

            return Created();
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }

    [HttpGet("diary_workout/exercise")]
    public async Task<IActionResult> ListDiaryExercisesByDate(string date, Guid userId)
    {
        try
        {
            var request = new ListDiaryExercisesByDateRequest(date, userId);
            var response = await _diaryWorkoutService.ListDiaryExercisesByDate(request);

            return Ok(response);
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }
}
