using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

namespace GymTracker.Infra.CloudStorage;

public class AzureBlobStorage : ICloudStorage
{
    private readonly string _connectionString;
    private readonly string _containerName;

    public AzureBlobStorage()
    {
        IConfigurationRoot config = new ConfigurationBuilder()
            .AddUserSecrets<AzureBlobStorage>()
            .Build();

        _connectionString = config["AzureBlobStorage:ConnectionString"]!;
        _containerName = config["AzureBlobStorage:ContainerName"]!;
    }

    public async Task<string> UploadData(IFormFile fileData)
    {
        try
        {
            if (fileData == null)
                throw new ArgumentException("You should not upload no data.");

            var newblobName = Guid.NewGuid().ToString().Replace("-", "") + Path.GetExtension(fileData.FileName);

            var blobServiceClient = new BlobServiceClient(_connectionString);
            var blobContainerClient = blobServiceClient.GetBlobContainerClient(_containerName);
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
