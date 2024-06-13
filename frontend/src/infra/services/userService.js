import api, { apiUrlLocal } from '../apiAccesor';

const registerUserEndpoint = '/users';
const loginEndpoint = '/users/login';
const updateProfileImageEndpoint = '/users/update_profile_image';
const getUserProfileImageEndpoint = '/users/profile_image';
const createProfileHistoryEndpoint = '/users/profile_history';
const getProfileHistoriesEndpoint = '/users/profile_history';
const sendPasswordRecoverCodeEndpoint = '/send_email/send_password_recovery_email';
const validatePasswordRecoverCodeEndpoint = '/send_email/validate_password_recovery_code';
const changePasswordEndpoint = '/users/change_password';

export async function MakeLogin(email, password) {
    try {
        const response = await api.post(apiUrlLocal + loginEndpoint, {
            userEmail: email,
            userPassword: password
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
            gender
        });

        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function GetUserProfileImage(userId) {
    try {
        const response = await api.get(
            `${apiUrlLocal}${getUserProfileImageEndpoint}?userId=${userId}`
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

export async function UpdateProfileImage(userId, imageUri) {
    try {
        const formData = new FormData();

        formData.append('userId', userId);

        formData.append('profileImageFile', {
            uri: imageUri,
            name: 'image.jpg',
            type: 'image/jpg'
        });

        const response = await api.patch(
            apiUrlLocal + updateProfileImageEndpoint,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
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
    evolutionPhotoUri
) {
    try {
        const formData = new FormData();

        formData.append('userId', userId);

        if (weight) {
            formData.append('weight', weight);
        }

        if (height) {
            formData.append('height', height);
        }

        if (abdominalGirth) {
            formData.append('abdominalGirth', abdominalGirth);
        }

        if (scapularGirth) {
            formData.append('scapularGirth', scapularGirth);
        }

        if (hipGirth) {
            formData.append('hipGirth', hipGirth);
        }

        if (armGirth) {
            formData.append('armGirth', armGirth);
        }

        if (legGirth) {
            formData.append('legGirth', legGirth);
        }

        if (bodyFat) {
            formData.append('bodyFat', bodyFat);
        }

        if (evolutionPhotoUri) {
            formData.append('evolutionPhoto', {
                uri: evolutionPhotoUri,
                name: 'image.jpg',
                type: 'image/jpg'
            });
        }

        const response = await api.post(
            apiUrlLocal + createProfileHistoryEndpoint,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
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

export async function GetProfileHistoriesByUserId(userId) {
    try {
        const response = await api.get(
            `${apiUrlLocal}${getProfileHistoriesEndpoint}?userId=${userId}`
        );

        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function GetUserLikesAmount(userId) {
    const getUserLikesEndpoint = '/users/likes_amount';

    try {
        const response = await api.get(
            `${apiUrlLocal}${getUserLikesEndpoint}?userId=${userId}`
        );

        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function GetUserLike(senderUserId, receiverUserId) {
    const getUserLikeEndpoint = '/users/user_like';

    try {
        const response = await api.get(
            `${apiUrlLocal}${getUserLikeEndpoint}?senderUserId=${senderUserId}&receiverUserId=${receiverUserId}`
        );

        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function CreateUserLike(senderUserId, receiverUserId) {
    const createUserLikesEndpoint = '/users/user_like';

    try {
        const response = await api.post(
            `${apiUrlLocal}${createUserLikesEndpoint}`,
            {
                senderUserId,
                receiverUserId
            }
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
        console.log(error);
    }
}

export async function DeleteUserLike(userLikeId) {
    const deleteUserLikesEndpoint = '/users/user_like';

    try {
        const response = await api.delete(
            `${apiUrlLocal}${deleteUserLikesEndpoint}?userLikeId=${userLikeId}`
        );

        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function SendPasswordRecoverCode(email) {
    try {
        const response = await api.post(
            `${apiUrlLocal}${sendPasswordRecoverCodeEndpoint}?email=${email}` 
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

export async function ValidatePasswordRecoverCode(email, code) {
    try {
        const response = await api.post(
            `${apiUrlLocal}${validatePasswordRecoverCodeEndpoint}?email=${email}&code=${code}` 
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

export async function ChangePassword() {
    try {
        const response = await api.post(apiUrlLocal + changePasswordEndpoint, {
            userEmail: email,
            newPassword: newPassword,
            passwordRecoverCode: passwordRecoverCode
        });
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