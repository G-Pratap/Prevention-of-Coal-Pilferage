import axios from "axios";

const api = axios.create({
    // baseURL: 'http://43.204.137.75/',
    baseURL: 'http://localhost:5000/',
});

export default api;