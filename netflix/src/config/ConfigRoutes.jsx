import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export function ProtectedRoute()  {
    const { user } = useAuth();
    const location = useLocation()

    return user ? <Outlet/> : <Navigate to={'/login'} state={{from: location}} replace/>
}

export function IsAuthentcatedUser() {
    const {user} = useAuth();
    const location = useLocation();

    return user ? <Navigate to={'/home'} state={{from: location}} replace/> : <Outlet/>
}