import api, { apiUrlLocal } from "../apiAccesor";

const createDefaultWorkoutEndpoint = "/workouts/default_workout";
const getDefaultWorkoutsByUserEndpoint = "/workouts/default_workout";
const deleteDefaultWorkoutEndpoint = "/workouts/default_workout";

export async function CreateDefaultWorkout(userId) {
  try {
    const response = await api.post(
      `${apiUrlLocal}${createDefaultWorkoutEndpoint}`,
      {
        userId,
        workoutName,
      },
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function GetDefaultWorkoutsByUserId(userId) {
  try {
    const response = await api.get(
      `${apiUrlLocal}${getDefaultWorkoutsByUserEndpoint}/userId?=${userId}`,
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function DeleteDefaultWorkoutId(defaultWorkoutId) {
  try {
    const response = await api.delete(
      `${apiUrlLocal}${deleteDefaultWorkoutEndpoint}/defaultWorkoutId?=${defaultWorkoutId}`,
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}
