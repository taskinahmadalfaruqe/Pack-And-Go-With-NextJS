import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'
import Link from 'next/link';

const LogoSection = () => {
    return (
        <div>
            <Link href={'/'}>
                <div className='flex items-center'>
                    <Image
                        alt='site_logo'
                        src={logo}
                        width={40}
                        height={50}
                        className=' cursor-pointer'
                    >

                    </Image>
                    <p className='text-HeadingColor font-semibold text-xl'>Pack & Go</p>
                </div>
            </Link>
        </div>
    );
};

export default LogoSection;