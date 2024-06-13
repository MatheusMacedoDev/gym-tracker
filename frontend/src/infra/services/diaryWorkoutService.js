import api, { apiUrlLocal } from "../apiAccesor";

const deleteDiaryWorkoutEndpoint = "/workouts/diary_workout";
const getExercisesByDiaryWorkoutEndpoint = "/workouts/diary_workout/exercise";
const createDiaryWorkoutEndpoint = "/workouts/diary_workout";
const createDiaryExerciseEndpoint = "/workouts/diary_workout/exercise";
const registerDiaryExerciseSeriesEndpoint = "/workouts/diary_workout/exercise/serie"

export async function DeleteDiaryWorkout(diaryWorkoutId) {
  try {
    const response = await api.delete(
      `${apiUrlLocal}${deleteDiaryWorkoutEndpoint}?diaryWorkoutId=${diaryWorkoutId}`,
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function GetExercisesByDiaryWorkout(date, userId) {
  try {
    const response = await api.get(
      `${apiUrlLocal}${getExercisesByDiaryWorkoutEndpoint}?date=${date}&userId=${userId}`,
    );

    return response;

  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
}

export async function CreateDiaryExercise(defaultExerciseId, diaryWorkoutId) {
  try {
    const response = await api.post(
      `${apiUrlLocal}${createDiaryExerciseEndpoint}`,
      {
        defaultExerciseId,
        diaryWorkoutId,
      },
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function CreateDiaryWorkout(defaultWorkoutId, workoutDate) {
  try {
    const response = await api.post(
      `${apiUrlLocal}${createDiaryWorkoutEndpoint}`,
      {
        defaultWorkoutId,
        workoutDate,
      },
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function RegisterDiaryExerciseSeries(diaryExerciseId, serieNumber, repetitions, overload) {
  try {
    const response = await api.post(
      `${apiUrlLocal}${registerDiaryExerciseSeriesEndpoint}`,
      {
        diaryExerciseId,
        serieNumber,
        repetitions,
        overload
      }
    )

    return response
  } catch (error) {
    console.log(error);
  }
}