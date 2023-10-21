import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (eamil, password) => {
        return createUserWithEmailAndPassword(auth, eamil, password)
    }

    const loginUser = (eamil, password) => {
        return signInWithEmailAndPassword(auth , eamil, password)
    }

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider); 
    }
    
    const userLogout = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unsbsCribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in', currentUser);
            setUser(currentUser);
        })
        return () => {
            unsbsCribe();
        }
    },[]);


    const authInfo = {user, createUser, loginUser, googleLogin, userLogout}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;