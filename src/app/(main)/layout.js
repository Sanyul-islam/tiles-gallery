import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </>
    );
};

export default layout;