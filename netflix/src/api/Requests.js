import axiosClient, { API_KEY } from "./axiosClient";

export const imageOriginal = (path) => {
    return `https://image.tmdb.org/t/p/original/${path}`
}

export const imageW500 = (path) => {
    return `https://image.tmdb.org/t/p/w500/${path}`
}

export const _requests = {
    requestPopular: axiosClient.get('movie/popular', {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page: 1
        }
    }),

    requestTopRated: axiosClient.get('movie/top_rated', {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page: 1
        }
    }),

    requestTrending: axiosClient.get('trending/movie/week', {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    }),

    requestUpcoming: axiosClient.get('movie/upcoming', {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page: 1
        }
    }),
};

export default _requests;

