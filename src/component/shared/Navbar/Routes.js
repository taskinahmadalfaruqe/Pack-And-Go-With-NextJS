import Link from 'next/link';
import React from 'react';

const Routes = () => {
    return (
        <div className='flex justify-between gap-10 items-center'>
            <div>
                <Link
                    href={'/'}
                >
                    Home
                </Link>
            </div>
            <div>
                <Link
                    href={'/'}
                >
                    Booking
                </Link>
            </div>
        </div>
    );
};

export default Routes;