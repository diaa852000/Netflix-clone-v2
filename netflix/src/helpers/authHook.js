import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";


const useHandleAuth = async (data, authMethod) => {
    const {logIn, singUp} = useAuth();
    if (authMethod === "login") {
        try {
            await logIn(data.email, data.password);
            // return <Navigate to={'/home'}/>
        } catch (error) {
            console.error("SignUp error has occured", error)
        }
    } else if (authMethod === "signup") {
        try {
            await singUp(data.email, data.password);
            // return <Navigate to={'/home'}/>
        } catch (error) {
            console.error("SignUp error has occured", error)
        }
    }
}

export default useHandleAuth;