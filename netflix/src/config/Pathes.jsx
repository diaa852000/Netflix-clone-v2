import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Account, Home, Login, Signup } from '../pages'

const Pathes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/account' element={<Account/>} />
            
        </Routes>
    )
}

export default Pathes