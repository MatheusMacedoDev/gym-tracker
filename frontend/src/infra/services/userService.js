import api from "../ApiAccesor"

const loginEndpoint = '/users/login'

export function makeLogin(email, password) {
    const response = api.post(loginEndpoint, {
        userEmail: email,
        userPassword: password
    })

    return response;
}