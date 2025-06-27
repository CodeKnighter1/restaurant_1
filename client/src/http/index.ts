import axios from 'axios';

export const API_URL = `http://localhost:5000`;

const $axios = axios.create({
    baseURL: `${API_URL}/api`,
    withCredentials: true,
});

export default $axios;