import {Routes, Route} from 'react-router-dom'
import * as ROUTES from '../constants/routes'

import { Home, Browse, Signin, Signup  } from '../pages'

const Pathes = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home/>}/>
            <Route path={ROUTES.BROWSE} element={<Browse/>}/>
            <Route path={ROUTES.SIGN_IN} element={<Signin/>}/>
            <Route path={ROUTES.SIGN_UP} element={<Signup/>}/>
        </Routes>
    )
}

export default Pathes
