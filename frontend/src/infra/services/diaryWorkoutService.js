import api, { apiUrlLocal } from "../apiAccesor";

const createDiaryWorkoutEndpoint = "/workouts/diary_workout";
const deleteDiaryWorkoutEndpoint = "/workouts/diary_workout";

const createDiaryExerciseEndpoint = "/workouts/diary_workout/exercise";
const getExercisesByDiaryWorkoutEndpoint = "/workouts/diary_workout/exercise";

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

export async function DeleteDiaryWorkoutId(diaryWorkoutId) {
  try {
    const response = await api.delete(
      `${apiUrlLocal}${deleteDiaryWorkoutEndpoint}?diaryWorkoutId=${diaryWorkoutId}`,
    );

    return response;
  } catch (error) {
    console.log(error);
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

export async function GetExercisesByDiaryWorkout(date, userId) {
  
    const response = await api.get(
      `${apiUrlLocal}${getExercisesByDiaryWorkoutEndpoint}?date=${date}&userId=${userId}`,
    ) .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });

    return response;
}
