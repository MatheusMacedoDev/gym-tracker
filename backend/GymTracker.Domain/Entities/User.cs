using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using GymTracker.Utils.Cryptography;

namespace GymTracker.Domain.Entities;

[Table("users")]
public class User
{
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

    private readonly ICryptographyStrategy? _cryptographyStrategy;

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

        _cryptographyStrategy = cryptographyStrategy;
    }
}
