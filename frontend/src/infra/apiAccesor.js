import axios from "axios";

const apiIp = '192.168.15.64';
const apiPort = '5295';

export const apiUrlLocal = `http://${apiIp}:${apiPort}/api`;

const api = axios.create({
    baseUrl : apiUrlLocal
})

export default api