namespace GymTracker.Infra.Data.DAOs.ProfileHistory;
public record ProfileHistoryDTO(
    Guid profileHistoryId,
    DateTime profileDate,
    decimal weight,
    short height,
    decimal? abdominalGirth,
    decimal? scapularGirth,
    decimal? hipGirth,
    decimal? armGirth,
    decimal? legGirth,
    decimal? bodyFat,
    string? evolutionPhoto
);