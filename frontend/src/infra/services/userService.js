import api, { apiUrlLocal } from "../apiAccesor";

const registerUserEndpoint = "/users";
const loginEndpoint = "/users/login";
const updateProfileImageEndpoint = "/users/update_profile_image";
const createProfileHistoryEndpoint = "/users/profile_history";

export async function makeLogin(email, password) {
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

export async function registerUser(email, password, name, birthYear, gender) {
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

export async function updateProfileImage(userId, imageUri) {
  try {
    const formData = FormData();

    formData.append("userId", userId);

    formData.append("profileImageFile", {
      uri: imageUri,
      name: "image.jpg",
      type: "image/jpg",
    });

    const response = await api.patch(updateProfileImageEndpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function createProfileHistory(
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

    const response = await api.post(createProfileHistoryEndpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}
