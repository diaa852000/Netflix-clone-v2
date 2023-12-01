import { createContext, useContext, useEffect, useState } from "react";
import {auth, db} from '../lib/firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
import { setDoc, doc } from "firebase/firestore";


const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const [user, setUser] = useState({});

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db, "users", email), {
            savedShows: []
        });
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => signOut(auth);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (curruntUser) => {
            setUser(curruntUser);
        });

        return () => {
            unsubscribe();
        }
    })

    return (
        <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}