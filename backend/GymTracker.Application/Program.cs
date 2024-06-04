using System.Text;
using GymTracker.Application;
using GymTracker.Application.Services;
using GymTracker.Application.Services.DiaryWorkouts;
using GymTracker.Domain.Repositories;
using GymTracker.Infra.Data;
using GymTracker.Infra.Data.DAOs.DefaultExercise;
using GymTracker.Infra.Data.DAOs.DefaultWorkout;
using GymTracker.Infra.Data.DAOs.DiaryExercise;
using GymTracker.Infra.Data.DAOs.Exercise;
using GymTracker.Infra.Data.DAOs.ProfileHistory;
using GymTracker.Infra.Data.DAOs.User;
using GymTracker.Infra.Data.UnityOfWork;
using GymTracker.Infra.Repositories;
using GymTracker.Utils.Cryptography;
using GymTracker.Utils.Token;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

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
    builder.Services.AddScoped<IExerciseRepository, ExerciseRepository>();

    // DAOs
    builder.Services.AddScoped<IDefaultWorkoutDAO, DefaultWorkoutDAO>();
    builder.Services.AddScoped<IExerciseDAO, ExerciseDAO>();
    builder.Services.AddScoped<IDefaultExerciseDAO, DefaultExerciseDAO>();
    builder.Services.AddScoped<IDiaryExerciseDAO, DiaryExerciseDAO>();
    builder.Services.AddScoped<IProfileHistoryDAO, ProfileHistoryDAO>();
    builder.Services.AddScoped<IUserDAO, UserDAO>();

    // Services
    builder.Services.AddScoped<IUserService, UserService>();
    builder.Services.AddScoped<IDefaultWorkoutService, DefaultWorkoutService>();
    builder.Services.AddScoped<IDiaryWorkoutService, DiaryWorkoutService>();
    builder.Services.AddScoped<IExerciseService, ExerciseService>();

    // Strategies Injections
    builder.Services.AddSingleton<ICryptographyStrategy, CryptographyStrategy>();
    builder.Services.AddSingleton<ITokenStrategy, TokenStrategy>();

    // Authentication
    var key = Encoding.ASCII.GetBytes(builder.Configuration["Token:SecurityKey"]!);

    builder.Services.AddAuthentication(x =>
    {
        x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(x =>
    {
        x.RequireHttpsMetadata = false;
        x.SaveToken = true;
        x.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });
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

