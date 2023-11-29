import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Account, Home, Login, Signup } from '../pages'
import { ProtectedRoute, IsAuthentcatedUser } from './ConfigRoutes'

const Pathes = () => {
    return (
        <Routes>
            <Route element={<IsAuthentcatedUser/>}>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Route>

            <Route element={<ProtectedRoute />}>
                <Route path='/home' element={<Home />} />
                <Route path='/account' element={<Account />} />
            </Route>
        </Routes>
    )
}

export default Pathes