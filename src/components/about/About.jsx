import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { authContext } from '../MainLayout/MainLayout';

const About = () => {

    const {handleGoogleLogin} = useContext(authContext)

    return (
        <div>
            This is ABout section 
            <button className='p-3 bg-green-400 rounded-lg' onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
};

export default About;