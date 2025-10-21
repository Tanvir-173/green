import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../Footer/footer';
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster position="top-center" />
        </div>
    );
};

export default Root;