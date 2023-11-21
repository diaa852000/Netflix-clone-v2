import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages'

const Pathes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default Pathes