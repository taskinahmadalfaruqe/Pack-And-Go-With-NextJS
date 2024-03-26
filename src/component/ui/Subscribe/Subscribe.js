import React from 'react';
import './style.css'
import CommonTitle from '@/component/utils/CommonTitle/CommonTitle';

const Subscribe = () => {
    return (
        <div className='bgImage py-[100px]'>
            <div className="container text-WhiteColor max-w-lg">
                <div className='flex gap-5 flex-col text-center mx-auto '>
                    <div className='text-2xl font-semibold capitalize font-Truculenta'>
                        Subscribe To Get The Latest News About Us
                    </div>
                    <div className='text-sm'>
                        We Recommended you to subscribe to our newspaperm, enter your email below to get daily update about us.
                    </div>
                </div>
                <div className='bg-WhiteColor text-HeadingColor  rounded-md border-[1px] border-PrimaryColor w-fit p-2 mt-10 mx-auto'>
                    <form className='flex gap-5'>
                        <input className='py-3 px-1'  type="text" placeholder='Input Your Email Address' />
                        <button className='py-3 px-5 rounded-lg bg-PrimaryColor text-WhiteColor uppercase' type='submit'>Subscribe</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Subscribe;