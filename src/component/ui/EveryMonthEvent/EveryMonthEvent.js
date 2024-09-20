import SmallTitle from '@/component/utils/SmallTitle/SmallTitle';
import Image from 'next/image';
import React from 'react';
import image1 from "../../../assets/Month01.jpg"
import image2 from "../../../assets/Month02.jpg"
import image3 from "../../../assets/Combined Shape.png"

const EveryMonthEvent = () => {
    return (
        <div className='py-8'>
            <div className='container flex gap-10 justify-between items-center w-full'>
            <div className="h-[600px] p-4 w-[50%] relative">
          <Image
            alt="Image"
            height={150}
            width={150}
            src={image3}
            className="absolute bottom-[20%] left-[19%]"
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
                <div className='min-w-[490px] space-y-5' >
                    <SmallTitle SmallTitle={'Always give you promo on every Month / Event'} SmallDescription={'We make sure give you a lot of promo every motnh or event based on calendar. If you want, just Subscribe on Newsletter.'}></SmallTitle>
                    <div className=' flex flex-col'>
                        <div className='flex gap-5  items-center'>
                            <div className='flex gap-2 p-1 flex-1  items-center'>
                                <div>
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 7L5 11L15 1" stroke="#007F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                                <div>25% for New Members</div>
                            </div>
                            <div className='flex gap-2 p-1 flex-1  items-center'>
                                <div>
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 7L5 11L15 1" stroke="#007F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>Cancelled refund 100%</div>
                            </div>
                        </div>
                        <div className='flex gap-5  items-center'>
                            <div className='flex gap-2 p-1 flex-1 items-center'>
                                <div>
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 7L5 11L15 1" stroke="#007F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>Up 50% on your birthday</div>
                            </div>
                            <div className='flex gap-2 p-1 flex-1 items-center'>
                                <div>
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 7L5 11L15 1" stroke="#007F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>Reward for 1000% Points</div>
                            </div>
                        </div>
                        <div className='flex gap-5  items-center'>
                            <div className='flex gap-2 p-1 flex-1 items-center'>
                                <div>
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 7L5 11L15 1" stroke="#007F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>Cashback 10% via OVO</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EveryMonthEvent;