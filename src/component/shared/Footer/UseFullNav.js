import Link from 'next/link';
import React from 'react';

const UseFullNav = () => {
    return (
        <div className='text-base flex flex-col gap-5'>
            <Link href={'/tour'} className='text-xl font-bold text-HeadingColor hover:text-PrimaryColor transition-all duration-150'>Useful Links</Link>
            <Link href={'/tour'} className='hover:text-PrimaryColor transition-all duration-200'>Deals</Link>
            <Link href={'/tour'} className='hover:text-PrimaryColor transition-all duration-200'>FAQs</Link>
            <Link href={'/tour'} className='hover:text-PrimaryColor transition-all duration-200'>Why Choose Us</Link>
            <Link href={'/tour'} className='hover:text-PrimaryColor transition-all duration-200'>Subscribe</Link>
        </div>
    );
};

export default UseFullNav;