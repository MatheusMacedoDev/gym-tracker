import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';

if (!global.atob) {
    global.atob = decode;
}

if (!global.btoa) {
    global.btoa = encode;
}

export async function setUserToken(token) {
    await AsyncStorage.setItem('userToken', token);
}

export async function getUserToken() {
    const userToken = await AsyncStorage.getItem('userToken');

    if (userToken == null) {
        return {};
    }

    const decodedUserToken = jwtDecode(userToken);

    return {
        token: userToken,
        userId: decodedUserToken.jti,
        name: decodedUserToken['unique_name'],
        profileImage: decodedUserToken['profile_image'],
        gender: decodedUserToken.gender
    };
}

export async function removeUserToken() {
    await AsyncStorage.removeItem('userToken');
}
