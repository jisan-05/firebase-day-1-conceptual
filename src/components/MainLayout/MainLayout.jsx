import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <h3>This is MainLayout</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;