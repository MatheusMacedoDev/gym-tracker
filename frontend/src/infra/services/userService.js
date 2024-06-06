import api, { apiUrlLocal } from "../apiAccesor";

const registerUserEndpoint = "/users";
const loginEndpoint = "/users/login";
const updateProfileImageEndpoint = "/users/update_profile_image";
const createProfileHistoryEndpoint = "/users/profile_history";
const getProfileHistoriesEndpoint = "/users/profile_history";

export async function MakeLogin(email, password) {
  try {
    const response = await api.post(apiUrlLocal + loginEndpoint, {
      userEmail: email,
      userPassword: password,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function RegisterUser(email, password, name, birthYear, gender) {
  try {
    const response = await api.post(apiUrlLocal + registerUserEndpoint, {
      email,
      password,
      name,
      birthYear,
      gender,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function UpdateProfileImage(userId, imageUri) {
  try {
    const formData = FormData();

    formData.append("userId", userId);

    formData.append("profileImageFile", {
      uri: imageUri,
      name: "image.jpg",
      type: "image/jpg",
    });

    const response = await api.patch(
      apiUrlLocal + updateProfileImageEndpoint,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function CreateProfileHistory(
  userId,
  weight,
  height,
  abdominalGirth,
  scapularGirth,
  hipGirth,
  armGirth,
  legGirth,
  bodyFat,
  evolutionPhotoUri,
) {
  try {
    const formData = FormData();

    formData.append("userId", userId);
    formData.append("weight", weight);
    formData.append("height", height);
    formData.append("abdominalGirth", abdominalGirth);
    formData.append("scapularGirth", scapularGirth);
    formData.append("hipGirth", hipGirth);
    formData.append("armGirth", armGirth);
    formData.append("legGirth", legGirth);
    formData.append("bodyFat", bodyFat);

    formData.append("evolutionPhoto", {
      uri: evolutionPhotoUri,
      name: "image.jpg",
      type: "image/jpg",
    });

    const response = await api.post(
      apiUrlLocal + createProfileHistoryEndpoint,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function GetProfileHistoriesByUserId(userId) {
  try {
    const response = await api.get(
      `${apiUrlLocal}${getProfileHistoriesEndpoint}/userId?=${userId}`,
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}
