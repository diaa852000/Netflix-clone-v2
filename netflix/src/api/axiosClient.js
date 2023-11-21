import axios from "axios";

export const BASE_URL = 'https://api.themoviedb.org/3/'
export const API_KEY = 'e8f84d4d9892079c2d573b073e720302';
export const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGY4NGQ0ZDk4OTIwNzljMmQ1NzNiMDczZTcyMDMwMiIsInN1YiI6IjY0ZTFkNzZmZTE5ZGU5MDEzYTI4ZDliMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NpB-RAEhtMrgJEQiXAh57rmbtzaCsjI71l7PufoJDfQ'

export const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
});

axiosClient.interceptors.request.use(config => {
    return config;
}, (err) => {
    return Promise.reject(err);
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default axiosClient;


