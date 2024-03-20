import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
import LogoSection from '../LogoSection/LogoSection';
import Link from 'next/link';

const FooterNav = () => {
    return (
        <div className=' flex flex-col space-y-5'>
            <div>
                <LogoSection></LogoSection>
            </div>
            <div className='flex gap-2 justify-between items-center text-2xl font-bold'>
                <div>
                    <Link
                        target='_blank'
                        href={'https://www.facebook.com'}
                        className='text-blue-400 hover:text-blue-800 transition-all duration-300'>
                        <FaFacebook></FaFacebook>
                    </Link>
                </div>
                <div>
                    <Link
                        target='_blank'
                        href={'https://www.facebook.com'}
                        className='text-blue-400 hover:text-blue-800 transition-all duration-300'
                    >
                        <FaTwitter></FaTwitter>
                    </Link>
                </div>
                <div>
                    <Link
                        target='_blank'
                        href={'https://www.facebook.com'}
                        className='text-blue-400 hover:text-blue-800 transition-all duration-300'
                    >
                        <FaLinkedin></FaLinkedin>
                    </Link>
                </div>
                <div>
                    <Link
                        target='_blank'
                        href={'https://www.facebook.com'}
                        className='text-pink-400 hover:text-[#E60023] transition-all duration-300'
                    >
                        <SlSocialPintarest></SlSocialPintarest>
                    </Link>
                </div>
            </div>
            <div>
                <div>
                    <a
                        href={'tel:+8801318021256'}
                        className='hover:text-PrimaryColor duration-300 transition-all'
                    >
                        Number : +8801318021256
                    </a>
                    <p>3131 Doctor Drive. LA, California</p>
                    <a
                        href="mailto:taskinahmadalfaruqe@gmail.com"
                        className='hover:text-PrimaryColor duration-300 transition-all'
                    >
                        E-mail: taskinahmadalfaruqe@mail.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FooterNav;