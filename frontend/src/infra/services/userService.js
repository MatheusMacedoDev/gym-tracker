import api from "../ApiAccesor"

const registerUserEndpoint = '/users';
const loginEndpoint = '/users/login';

export function makeLogin(email, password) {
    try {
        const response = api.post(loginEndpoint, {
            userEmail: email,
            userPassword: password
        })
    
        return response;
    } catch (error) {
        console.log(error);
    }
}

export function registerUser(email, password, name, birthYear, gender) {
    try {
        const response = api.post(registerUserEndpoint, {
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