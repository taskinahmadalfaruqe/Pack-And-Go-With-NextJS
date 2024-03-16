import Link from 'next/link';
import React from 'react';

const Routes = () => {
    return (
        <div className='flex justify-between gap-20 items-center'>
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
            <div>
                <button
                    className='bg-PrimaryColor text-WhiteColor rounded-xl font-bold px-7 py-3'
                >
                    Booking
                </button>
            </div>
        </div>
    );
};

export default Routes;                                                         