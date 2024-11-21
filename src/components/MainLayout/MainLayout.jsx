import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { GoogleAuthProvider,signInWithPopup, GithubAuthProvider , TwitterAuthProvider } from "firebase/auth";
import { auth } from '../../Firebase/firebase.config';

export const authContext = createContext();

const MainLayout = () => {

    const [user,setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => setUser(result.user))
    }
    const handleGitHubLogin = () => {
        signInWithPopup(auth, gitHubProvider)
        .then(result => setUser(result.user))
    }
    const twitterLogin = () => {
        signInWithPopup(auth, twitterProvider)
        .then(result => setUser(result.user))
    }
    const authData = {
        handleGoogleLogin,handleGitHubLogin,twitterLogin
    }

    useEffect(() => {
        console.log("User state",user)
    },[user])

    return (
        <div>
            <authContext.Provider value={authData}> 
            <Outlet></Outlet>
            </authContext.Provider>
        </div>
    );
};

export default MainLayout;