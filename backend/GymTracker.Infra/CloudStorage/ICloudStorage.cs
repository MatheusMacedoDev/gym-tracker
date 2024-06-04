using Microsoft.AspNetCore.Http;

namespace GymTracker.Infra.CloudStorage;

public interface ICloudStorage
{
    Task<string> UploadData(IFormFile fileData);
}

