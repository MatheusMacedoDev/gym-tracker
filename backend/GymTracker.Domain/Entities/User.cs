using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using GymTracker.Utils.Cryptography;
using Microsoft.EntityFrameworkCore;

namespace GymTracker.Domain.Entities;

[Table("users")]
[Index(nameof(Email), IsUnique = true)]
public class User
{
    [NotMapped]
    private const string DEFAULT_PROFILE_PHOTO_URI = "https://gymtrackerblobstorage.blob.core.windows.net/gymtrackerblobcontainer/default_profile_image.png";

    [Key]
    [Column("user_id")]
    public Guid UserId { get; private set; }

    [Required]
    [Column("email")]
    public string? Email { get; set; }

    [Required]
    [Column("password_hash")]
    public byte[]? PasswordHash { get; set; }

    [Required]
    [Column("password_salt")]
    public byte[]? PasswordSalt { get; set; }

    [Required]
    [Column("name")]
    public string? Name { get; set; }

    [Required]
    [Column("birth_year", TypeName = "smallint")]
    public short BirthYear { get; set; }

    [Required]
    [Column("gender", TypeName = "char(1)")]
    public char Gender { get; set; }

    [Column("password_recover_code", TypeName = "char(5)")]
    public string? PasswordRecoverCode { get; set; }

    [Column("profile_photo")]
    public string? ProfilePhoto { get; set; }

    [Column("profile_updated_on")]
    public DateTime? ProfileUpdatedOn { get; set; }

    private readonly ICryptographyStrategy _cryptographyStrategy;

    protected User()
    {
    }

    public User(string email, string plainPassword, string name, short birthYear, char gender, ICryptographyStrategy cryptographyStrategy)
    {
        Email = email;
        PasswordSalt = cryptographyStrategy.MakeSalt();
        PasswordHash = cryptographyStrategy.MakeHashedPassword(plainPassword, PasswordSalt);
        Name = name;
        BirthYear = birthYear;
        Gender = gender;

        ProfilePhoto = DEFAULT_PROFILE_PHOTO_URI;

        _cryptographyStrategy = cryptographyStrategy;
    }

    public void SetProfilePhoto(string photoUri)
    {
        if (String.IsNullOrEmpty(photoUri))
            return;

        ProfilePhoto = photoUri;
    }

    public void MarkProfileAsUpdated()
    {
        ProfileUpdatedOn = DateTime.UtcNow;
    }

    public void ChangePassword(string newPassword, ICryptographyStrategy cryptographyStrategy)
    { 
        PasswordSalt = _cryptographyStrategy.MakeSalt();
        PasswordHash = _cryptographyStrategy.MakeHashedPassword(newPassword, PasswordSalt);
    }
}
