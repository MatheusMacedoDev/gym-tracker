import api, { apiUrlLocal } from "../apiAccesor";

const getMuscleGroupsEndpoint = "/muscle_groups";
const getExercisesByMuscleGroupIdEndpoint = "/muscle_group/exercises"

export async function GetMuscleGroups() {
    try {
        const response = await api.get(
            `${apiUrlLocal}${getMuscleGroupsEndpoint}`
        );
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function GetExercisesByMuscleGroupId(mucleGroupId) {
    try {
        const response = await api.get(
            `${apiUrlLocal}${getExercisesByMuscleGroupIdEndpoint}?muscleGroupId=${mucleGroupId}`
        );
        return response;
    } catch (error) {
        console.log(error);
    }
}