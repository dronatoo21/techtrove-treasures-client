import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (eamil, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, eamil, password)
    }

    const loginUser = (eamil, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , eamil, password)
    }

    const googleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider); 
    }
    
    const userLogout = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsbsCribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsbsCribe();
        }
    },[]);


    const authInfo = {user, createUser, loginUser, googleLogin, userLogout, loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;