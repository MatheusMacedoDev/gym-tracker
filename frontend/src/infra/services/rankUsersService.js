import api, { apiUrlLocal } from "../apiAccesor";

const getRankUsersByLikesEndpoint = "/rank/users/by_likes"
const getRankUsersByLatestUpdateEndpoint = "/rank/users/by_latest_update"

export async function getRankUsersByLikes() {
    try {
        const response = await api.get(
            `${apiUrlLocal}${getRankUsersByLikesEndpoint}`
        );
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function getRankUsersByLatestUpdate() {
    try {
        const response = await api.get(
            `${apiUrlLocal}${getRankUsersByLatestUpdateEndpoint}`
        )
        return response;
    } catch (error) {
        console.log(error);
    }
}