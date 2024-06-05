namespace GymTracker.Application.Services.Contracts.Requests;

public record RegisterProfileHistoryRequest
(
    Guid userId,
    float weight,
    short height,
    float? abdominalGirth,
    float? scapularGirth,
    float? hipGirth,
    float? armGirth,
    float? legGirth,
    float? bodyFat,
    IFormFile? evolutionPhoto
);
