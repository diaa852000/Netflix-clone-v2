import axios from 'axios';
import React, { useEffect, useState } from 'react'
import _requests from '../api/Requests';

const Main = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await _requests.requestPopular;
                setMovies(response.data.results)
                console.log(movies);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        }

        fetchData()
    },[])

    return (
        <div>Main</div>
    )
}

export default Main