﻿using GymTracker.Application.Services.Contracts;
using GymTracker.Application.Services.Contracts.Requests;
using GymTracker.Application.Services.Contracts.Responses;
using GymTracker.Application.Services.DiaryWorkouts.Contracts.Requests;

namespace GymTracker.Application.Services.DiaryWorkouts;

public interface IDiaryWorkoutService
{
    Task RegisterDiaryWorkout(RegisterDiaryWorkoutRequest request);
    Task RegisterDiaryExercise(RegisterDiaryExerciseRequest request);
    Task<RegisterDiaryExerciseSerieResponse> RegisterDiaryExerciseSerie(RegisterDiaryExerciseSerieRequest request);
    Task<ListDiaryExercisesByDateResponse> ListDiaryExercisesByDate(ListDiaryExercisesByDateRequest request);
    Task DeleteDiaryWorkout(Guid diaryWorkoutId);
}
