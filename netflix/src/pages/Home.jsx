import React from 'react'
import { Main, Row } from '../components'
import _requests from '../api/Requests'

const rowTypes = [
    // { id: 1, title: 'Top Rated', requestName: 'requestTopRatedMovie' },
    { id: 1, title: 'On Air Tv', requestName: 'requestOnAirTv' },
    { id: 2, title: 'Trending Movie', requestName: 'requestTrendingTV' },
    { id: 3, title: 'Trending TV', requestName: 'requestTrendingMovie' },
    { id: 4, title: 'UpComing', requestName: 'requestUpcoming' },
    { id: 5, title: 'Popular', requestName: 'requestPopular' },
]

// todo: create function combines between top rated movies and tv and another one for on air (movie + tv)

const Home = () => {

    const handleRequestTyep = (requestName) => {
        switch (requestName) {
            case 'requestUpcoming':
                return _requests.requestUpcoming;
            case 'requestPopular':
                return _requests.requestPopular;
            case 'requestTrendingTv':
                return _requests.requestTrendingTV;
            case 'requestTrendingMovie':
                return _requests.requestTrendingMovie;
            case 'requestOnAirTv':
                return _requests.requestOnAirTv;
            default: 
                return _requests.requestPopular;
        }
    }

    return (
        <>
            <Main />
            { rowTypes.map(item => <Row key={item.id} title={item.title} fetchURL={() => handleRequestTyep(item.requestName)} />) }
        </>
    )
}

export default Home

