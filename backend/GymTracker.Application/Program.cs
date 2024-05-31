using GymTracker.Application;
using GymTracker.Application.Services;
using GymTracker.Domain.Repositories;
using GymTracker.Infra.Data;
using GymTracker.Infra.Data.UnityOfWork;
using GymTracker.Infra.Repositories;
using GymTracker.Utils.Cryptography;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddControllers().AddNewtonsoftJson();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();

    // Adding DbContext
    builder.Services.AddDbContext<DataContext>();

    // UnityOfWork
    builder.Services.AddScoped<IUnityOfWork, UnityOfWork>();

    // Repository
    builder.Services.AddScoped<IUserRepository, UserRepository>();
    builder.Services.AddScoped<IWorkoutRepository, WorkoutRepository>();

    // Services
    builder.Services.AddScoped<IUserService, UserService>();

    // Strategies Injections
    builder.Services.AddSingleton<ICryptographyStrategy, CryptographyStrategy>();
}

var app = builder.Build();
{
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();
    app.MapControllers();

    app.Run();
}

