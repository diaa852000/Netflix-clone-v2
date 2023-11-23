import React from 'react'
import { Main, Row } from '../components'
import _requests from '../api/Requests'

const rowTypes = [
    { id: 1, title: 'UpComing', requestName: 'requestUpcoming' },
    { id: 2, title: 'Popular', requestName: 'requestPopular' },
    { id: 3, title: 'Trending', requestName: 'requestTrending' },
    { id: 4, title: 'Top Rated', requestName: 'requestTopRated' },
]

const Home = () => {

    const handleRequestTyep = (requestName) => {
        switch (requestName) {
            case 'requestUpcoming':
                return _requests.requestUpcoming;
            case 'requestPopular':
                return _requests.requestPopular;
            case 'requestTrending':
                return _requests.requestTrending;
            case 'requestTopRated':
                return _requests.requestTopRated;
            default: 
                return _requests.requestTopRated;
        }
    }

    return (
        <>
            <Main />
            {
                rowTypes.map(({id, title, requestName}) => <Row key={id} title={title} fetchURL={() => handleRequestTyep(requestName)} />)
            }
            
        </>
    )
}

export default Home