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

    // todo: create function combines between top rated movies and tv and another one for on air (movie + tv)

    // requestTopRatedMovie: axiosClient.get('movie/top_rated', {
    //     params: {
    //         api_key: API_KEY,
    //         language: 'en-US',
    //         page: 1
    //     }
    // }),

    requestUpcoming: axiosClient.get('movie/upcoming', {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            page: 1
        }
    }),

    requestTrendingMovie: axiosClient.get('trending/movie/week', {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    }),
    
    requestTrendingTV: axiosClient.get('trending/tv/week', {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    }),
    
    requestOnAirTv: axiosClient.get('tv/on_the_air', {
        params: {
            api_key: API_KEY,
            language: 'en-US',
        }
    }),
    


};

export default _requests;

