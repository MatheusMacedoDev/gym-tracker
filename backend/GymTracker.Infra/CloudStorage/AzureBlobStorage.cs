using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Http;

namespace GymTracker.Infra.CloudStorage;

public class AzureBlobStorage : ICloudStorage
{
    private const string CONNECTION_STRING = "";
    private const string CONTAINER_NAME = "";
    private const string DEFAULT_URL = "";

    public async Task<string> UploadData(IFormFile fileData)
    {
        try
        {
            if (fileData == null)
            {
                return DEFAULT_URL;
            }

            var newblobName = Guid.NewGuid().ToString().Replace("-", "") + Path.GetExtension(fileData.FileName);

            var blobServiceClient = new BlobServiceClient(CONNECTION_STRING);
            var blobContainerClient = blobServiceClient.GetBlobContainerClient(CONTAINER_NAME);
            var blobClient = blobContainerClient.GetBlobClient(newblobName);

            using (var stream = fileData.OpenReadStream())
            {
                await blobClient.UploadAsync(stream, true);
            }

            return blobClient.Uri.ToString();
        }
        catch (Exception)
        {
            throw;
        }

    }
}
