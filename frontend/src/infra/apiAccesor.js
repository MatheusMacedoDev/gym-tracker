import axios from "axios";

const apiIp = '172.16.43.23';
const apiPort = '5295';

export const apiUrlLocal = `http://${apiIp}:${apiPort}/api`;

const api = axios.create({
    baseUrl : apiUrlLocal
})

export default api