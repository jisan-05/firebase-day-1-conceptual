import React from 'react';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { auth } from '../../Firebase/firebase.config';
const Home = () => {
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => console.log(result))
    }
    const handleGitHubLogin = () => {
        signInWithPopup(auth, gitHubProvider)
        .then(result => console.log(result))
    }
    return (
        <div>
           <button onClick={handleGoogleLogin} className='px-3 py-2 text-white rounded-lg bg-green-600 m-5'>Google Login</button>
           <button onClick={handleGitHubLogin} className='px-3 py-2 text-white rounded-lg bg-green-600 m-5'>Git Hub Login</button>
        </div>
    );
};

export default Home;