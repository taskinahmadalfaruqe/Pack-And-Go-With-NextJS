
import Link from 'next/link';
import React from 'react';

const Routes = () => {

    return (
        <div className='flex gap-5 text-NavbarColor'>
            <Link
                href={'/'}
            >
                Home
            </Link>
            <Link
                href={'/tour'}
            >
                Tours
            </Link>
            <Link
                href={'/booking'}
            >
                Booking
            </Link>
            <Link
                href={'/'}
            >
                Pages
            </Link>
            <Link
                href={'/features'}
            >
                Features
            </Link>
            <Link
                href={'/blog'}
            >
                Blog
            </Link>
        </div>
    );
};

export default Routes;                                                         