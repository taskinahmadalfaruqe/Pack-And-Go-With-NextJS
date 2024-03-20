import Link from 'next/link';
import React from 'react';

const SupportNav = () => {
    return (
        <div className='text-base flex flex-col gap-5'>
            <Link href={'/tour'} className='text-xl font-bold text-HeadingColor hover:text-PrimaryColor transition-all duration-150'>Support</Link>
            <Link href={'/tour'} className='hover:text-PrimaryColor transition-all duration-200'>Account</Link>
            <Link href={'/tour'} className='hover:text-PrimaryColor transition-all duration-200'>Legal</Link>
            <Link href={'/tour'} className='hover:text-PrimaryColor transition-all duration-200'>Contact</Link>
            <Link href={'/tour'} className='hover:text-PrimaryColor transition-all duration-200'>Affiliate Program</Link>
            <Link href={'/tour'} className='hover:text-PrimaryColor transition-all duration-200'>Privacy Policy</Link>
        </div>
    );
};

export default SupportNav;