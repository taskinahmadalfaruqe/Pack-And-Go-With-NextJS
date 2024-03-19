"use client"
import React from 'react';
import Link from 'next/link';
import { MdArrowRightAlt } from "react-icons/md";

const CommonButton = ({ ButtonValue, NavegateLink }) => {

    const handleClick = () => {
        console.log('button clicked', NavegateLink);
    }

    return (
        <div>
            <Link href={NavegateLink}>
                <button
                    className='bg-PrimaryColor w-fit text-WhiteColor font-medium px-5 py-3 rounded-sm rounded-bl-[20px] rounded-tr-[20px] flex justify-center items-center gap-2 hover:border-dashed border-[1px] hover:bg-WhiteColor hover:text-PrimaryColor border-PrimaryColor transition-all duration-200'
                    onClick={handleClick}
                >
                    {ButtonValue}
                    <MdArrowRightAlt className='text-2xl'/>
                </button>
            </Link>
        </div>
    );
};

export default CommonButton;