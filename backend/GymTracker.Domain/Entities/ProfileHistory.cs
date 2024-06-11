using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GymTracker.Domain.Entities;

[Table("profile_histories")]
public class ProfileHistory
{
    [Key]
    [Column("profile_history_id")]
    public Guid ProfileHistoryId { get; private set; }

    [Required]
    [Column("date")]
    public DateTime ProfileDate { get; private set; }

    // Metrics

    [Required]
    [Column("weight", TypeName = "decimal(5, 2)")]
    public float Weight { get; private set; }

    [Required]
    [Column("height")]
    public short Height { get; private set; }

    [Column("abdominal_girth", TypeName = "decimal(4, 1)")]
    public float? AbdominalGirth { get; private set; }

    [Column("scapular_girth", TypeName = "decimal(4, 1)")]
    public float? ScapularGirth { get; private set; }

    [Column("hip_girth", TypeName = "decimal(4, 1)")]
    public float? HipGirth { get; private set; }

    [Column("arm_girth", TypeName = "decimal(4, 1)")]
    public float? ArmGirth { get; private set; }

    [Column("leg_girth", TypeName = "decimal(4, 1)")]
    public float? LegGirth { get; private set; }

    [Column("body_fat", TypeName = "decimal(4, 3)")]
    public float? BodyFat { get; private set; }

    [Column("evolution_photo")]
    public string? EvolutionPhoto { get; private set; }

    // User Reference

    [Required]
    [Column("user_id")]
    public Guid UserId { get; private set; }

    [ForeignKey(nameof(UserId))]
    public User? User { get; private set; }

    protected ProfileHistory()
    {
    }

    public ProfileHistory(DateTime lastHistoryDate, Guid userId, float weight, short height, float? abdominalGirth, float? scapularGirth, float? hipGirth, float? armGirth, float? legGirth, float? bodyFat, string? evolutionPhoto)
    {
        //SpaceBetweenProfileDatesValidation(lastHistoryDate);

        ProfileHistoryId = Guid.NewGuid();
        ProfileDate = DateTime.UtcNow;

        Weight = weight;
        Height = height;

        AbdominalGirth = abdominalGirth;
        ScapularGirth = scapularGirth;
        HipGirth = hipGirth;
        ArmGirth = armGirth;
        LegGirth = legGirth;
        BodyFat = bodyFat;
        EvolutionPhoto = evolutionPhoto;

        UserId = userId;
    }

    public ProfileHistory(Guid userId, float weight, short height, float? abdominalGirth, float? scapularGirth, float? hipGirth, float? armGirth, float? legGirth, float? bodyFat, string? evolutionPhoto)
    {
        ProfileHistoryId = Guid.NewGuid();
        ProfileDate = DateTime.UtcNow;

        Weight = weight;
        Height = height;

        AbdominalGirth = abdominalGirth;
        ScapularGirth = scapularGirth;
        HipGirth = hipGirth;
        ArmGirth = armGirth;
        LegGirth = legGirth;
        BodyFat = bodyFat;
        EvolutionPhoto = evolutionPhoto;

        UserId = userId;
    }

    public bool IsValidSpaceBetweenDates(DateTime lastHistoryDate)
    {
        const int MIN_DAYS_BETWEEN_DATES = 7;

        DateTime nextDateRealease = lastHistoryDate.AddDays(MIN_DAYS_BETWEEN_DATES).Date;
        DateTime currentDate = DateTime.UtcNow.Date;

        bool IS_CURRENT_DATE_VALID = currentDate >= nextDateRealease;

        return IS_CURRENT_DATE_VALID;
    }

    void SpaceBetweenProfileDatesValidation(DateTime lastHistoryDate)
    {
        bool IS_CURRENT_DATE_INVALID = !IsValidSpaceBetweenDates(lastHistoryDate);

        if (IS_CURRENT_DATE_INVALID)
        {
            throw new InvalidOperationException("You can not create a new profile history until 7 days");
        }
    }
}

