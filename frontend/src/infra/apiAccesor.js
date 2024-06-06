import axios from "axios";

const apiIp = '192.168.21.87';
const apiPort = '5295';

export const apiUrlLocal = `http://${apiIp}:${apiPort}/api`;

const api = axios.create({
    baseUrl : apiUrlLocal,
    timeout: 1000
})

export default api