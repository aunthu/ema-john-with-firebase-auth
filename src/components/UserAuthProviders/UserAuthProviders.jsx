import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const UserAuthContext=createContext(null);
const auth=getAuth(app);
const UserAuthProviders = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
        return signOut(auth);
    }
// Observing auth state
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        // stop observing while unmounting
        return ()=>{
            return unsubscribe();
        }
    },[])
    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <UserAuthContext.Provider value={authInfo}>
            {children}
        </UserAuthContext.Provider>
    );
};

export default UserAuthProviders;