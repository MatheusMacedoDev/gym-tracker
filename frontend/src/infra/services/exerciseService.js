import api, { apiUrlLocal } from "../apiAccesor";

const getMuscleGroupsEndpoint = "/muscle_groups";

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