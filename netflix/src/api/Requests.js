import axiosClient, { API_KEY } from "./axiosClient";

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

// export const requests = {
//     requestPopular: `https://api.themoviedb.org/3/popular?api_key=${API_KEY}&language=en-US&page=1`,
//     requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
//     requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&quer=horror&page=1`,
//     requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
// };