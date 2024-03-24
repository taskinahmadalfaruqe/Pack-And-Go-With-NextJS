import CommonButton from '@/component/shared/CommonButton/CommonButton';
import Image from 'next/image';
import React from 'react';
import TourImage01 from '@/assets/paris.jpg'

const TourCard = () => {
    return (
        <div className='flex space-y-3 flex-col p-5  rounded-md shadow-lg shadow-PrimaryColor/20'>
            <div>
                <Image
                    alt='Tour Image'
                    src="https://i.ibb.co/MSR0zkx/paris.jpg"
                    width={300}
                    height={50}
                    className='rounded-md'
                >
                </Image>
            </div>
            <div>Retting</div>
            <div className='text-HeadingColor font-semibold font-Truculenta'>Paris, France</div>
            <div>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam</div>
            <div>Price: <span className='text-lg font-bold text-HeadingColor'>$150</span>/Person</div>
            <CommonButton
                ButtonValue={'Booking'}
                NavegateLink={'/tour'}
            >
            </CommonButton>
        </div>
    );
};

export default TourCard;

// https://i.ibb.co/zSb854W/bali.jpg
// https://i.ibb.co/Zdh6CsT/italy.jpg
// https://i.ibb.co/7SwtndL/lak.jpg
// https://i.ibb.co/qjwhvTp/Greece.jpg
// https://i.ibb.co/MSR0zkx/paris.jpg