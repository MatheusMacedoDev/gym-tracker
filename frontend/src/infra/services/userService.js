import api from "../ApiAccesor"

const registerUserEndpoint = '/users';
const loginEndpoint = '/users/login';


export async function makeLogin(email, password) {
    try {
        const response = await api.post(loginEndpoint, {
            userEmail: email,
            userPassword: password
        })
    
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function registerUser(email, password, name, birthYear, gender) {
    try {
        const response = await api.post(registerUserEndpoint, {
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

export async function updateProfileImage(userId, imageUri) {
    try {
        const formData = FormData();

        formData.append('userId', userId)

        formData.append('profileImageFile', {
            uri: imageUri,
            name: 'image.jpg',
            type: 'image/jpg'
        });

        const response = await api.patch(formData, {
            headers: {
                'Content-Type': 'multipart/form-data' 
            }
        })
    
        return response;
    } catch (error) {
        console.log(error);
    }

}