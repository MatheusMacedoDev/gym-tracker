namespace GymTracker.Application.Services.Contracts.Requests;
public record RegisterProfileHistoryResponse
(
    Guid profileHistoryId,
    Guid userId,
    float weight,
    short height,
    string? evolutionPhoto,
    float? abdominalGirth,
    float? scapularGirth,
    float? hipGirth,
    float? armGirth,
    float? legGirth,
    float? bodyFat
);