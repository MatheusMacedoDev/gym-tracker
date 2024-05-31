using GymTracker.Application.Services;
using GymTracker.Application.Services.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace GymTracker.Application.Controllers;

[Route("api/exercises")]
[ApiController]
[Produces("application/json")]
public class ExerciseController : ControllerBase
{
    private readonly IExerciseService _exerciseService;

    public ExerciseController(IExerciseService exerciseService)
    {
        _exerciseService = exerciseService;
    }

    [HttpPost("muscle_groups")]
    public async Task<IActionResult> RegisterMuscleGroup([FromBody] RegisterMuscleGroupRequest request)
    {
        try
        {
            var response = await _exerciseService.RegisterMuscleGroup(request);

            return StatusCode(201, response);
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }

    [HttpPost]
    public async Task<IActionResult> RegisterExercise([FromBody] RegisterExerciseRequest request)
    {
        try
        {
            var response = await _exerciseService.RegisterExercise(request);

            return StatusCode(201, response);
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }
}
