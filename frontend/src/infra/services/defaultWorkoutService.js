import api, { apiUrlLocal } from "../apiAccesor";

const createDefaultWorkoutEndpoint = "/workouts/default_workout";

export async function CreateDefaultWorkout(userId) {
  try {
    const response = await api.get(
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
