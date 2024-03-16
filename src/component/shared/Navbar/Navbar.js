
import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import Routes from './Routes';

const Navbar = () => {

    return (
        <div className="flex justify-between items-center bg-purple-500 py-2">
            <div className='flex items-center'>
                <Image
                    alt='site_logo'
                    src={logo}
                    width={40}
                    height={50}
                    className=''
                >

                </Image>
                <p>Pack & Go</p>
            </div>
            <div>
                <Routes></Routes>
            </div>
        </div>
    );
};

export default Navbar;