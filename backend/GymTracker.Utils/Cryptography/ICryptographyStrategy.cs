namespace GymTracker.Utils.Cryptography;

public interface ICryptographyStrategy
{
    byte[] MakeSalt();
    byte[] MakeHashedPassword(string password, byte[] salt);
    bool VerifyHashedPassword(string passwordInTest, byte[] passwordHash, byte[] passwordSalt);
}
