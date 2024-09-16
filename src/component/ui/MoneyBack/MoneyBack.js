import SmallTitle from '@/component/utils/SmallTitle/SmallTitle';
import image1 from "../../../assets/Rectangle 33.3.jpg";
import image2 from "../../../assets/Rectangle 34.3.jpg";
import image3 from "../../../assets/Combined Shape.png";
import React from 'react';
import Image from 'next/image';

const MoneyBack = () => {
    return (
        <div className='py-8'>
            <div className="container flex gap-10 justify-center items-center">
                <div>
                    <SmallTitle
                        SmallTitle={"100% Money back Guarantee If you Cancel"}
                        SmallDescription={"We Promises in this case. We still want to refund your money when you cancel order."}
                    >
                    </SmallTitle>
                </div>
                <div className="h-[600px] p-4 w-[50%] relative">
                    <Image
                        alt="Image"
                        height={150}
                        width={150}
                        src={image3}
                        className="absolute top-[20%] right-[19%]"
                    ></Image>
                    <Image
                        alt="Image"
                        height={350}
                        width={350}
                        src={image1}
                        className="rounded-xl border-[4px] border-WhiteColor absolute top-4 left-4"
                    ></Image>
                    <Image
                        alt="Image"
                        height={350}
                        width={350}
                        src={image2}
                        className="rounded-xl border-[4px] border-WhiteColor absolute bottom-4 right-4"
                    ></Image>
                </div>
            </div>
        </div>
    );
};

export default MoneyBack;