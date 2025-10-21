import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../Footer/footer';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;