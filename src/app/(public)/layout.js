import Footer from '@/component/shared/Footer/Footer';
import Navbar from '@/component/shared/Navbar/Navbar';
import React from 'react';

const PublicLayout = ({ children }) => {
    return (
        <div className='font-Popoins'>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default PublicLayout;