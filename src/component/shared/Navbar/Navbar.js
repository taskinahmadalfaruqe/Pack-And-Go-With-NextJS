
import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';

const Navbar = () => {

    return (
        <div className="flex justify-between items-center bg-purple-500 py-2">
            <div className=''>
                <Image
                    alt='site_logo'
                    src={logo}
                    width={150}
                    height={10}
                    className='bg-red-500'
                >

                </Image>
            </div>
            <div> Routes</div>
        </div>
    );
};

export default Navbar;