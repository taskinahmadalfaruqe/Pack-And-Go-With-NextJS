import Link from 'next/link';
import React from 'react';

const TourNav = () => {
    return (
        <div className='text-base flex flex-col gap-5'>
            <Link href={'/tour'} className='text-xl font-bold text-HeadingColor hover:text-PrimaryColor transition-all duration-150'>Tour</Link>
            <Link href={'/tour'} className='hover:text-PrimaryColor transition-all duration-200'>Thailand</Link>
            <Link href={'/tour'} className='hover:text-PrimaryColor transition-all duration-200'>Vietnam</Link>
            <Link href={'/tour'} className='hover:text-PrimaryColor transition-all duration-200'>Korea</Link>
            <Link href={'/tour'} className='hover:text-PrimaryColor transition-all duration-200'>Mexico</Link>
            <Link href={'/tour'} className='hover:text-PrimaryColor transition-all duration-200'>Italy</Link>
        </div>
    );
};

export default TourNav;