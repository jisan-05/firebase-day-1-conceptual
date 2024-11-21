import React, { useContext } from 'react';

import { authContext } from '../MainLayout/MainLayout';

const Home = () => {

    const contextValue = useContext(authContext)
    console.log(contextValue)
    const { handleGoogleLogin,handleGitHubLogin,twitterLogin} = contextValue;
   
    return (
        <div>
            <button onClick={handleGoogleLogin} className='px-3 py-2 text-white rounded-lg bg-green-600 m-5'>Google Login</button>
           <button onClick={handleGitHubLogin} className='px-3 py-2 text-white rounded-lg bg-green-600 m-5'>Git Hub Login</button>
           <button onClick={twitterLogin} className='px-3 py-2 text-white rounded-lg bg-green-600 m-5'>Twitter Login</button> 
        </div> 
    );
};

export default Home;