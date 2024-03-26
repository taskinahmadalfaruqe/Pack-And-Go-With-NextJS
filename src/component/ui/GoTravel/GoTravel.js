import CommonButton from '@/component/utils/CommonButton/CommonButton';
import SmallTitle from '@/component/utils/SmallTitle/SmallTitle';
import React from 'react';

const GoTravel = () => {
    return (
        <div className='bg-HeadingColor/5'>
            <div className='container py-14 flex justify-start items-center gap-5 text-ParagraphColor'>
                <div className='flex-1'>
                    <SmallTitle
                        SmallTitle={'Go Travel, Discover Remember Us'}
                        SmallDescription={"We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes."}
                    ></SmallTitle>
                    <div className='max-w-sm space-y-4'>

                        <div className='flex gap-2 items-center justify-start'>
                            <div>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#007F5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div>We are self-service data software visually
                                appealing data visualizations.
                            </div>
                        </div>

                        <div className='flex gap-2 items-center justify-start'>
                            <div>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#007F5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div>We are self-service data software visually
                                appealing data visualizations.
                            </div>
                        </div>

                        <div className='flex gap-2 items-center justify-start'>
                            <div>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#007F5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div>We are self-service data software visually
                                appealing data visualizations.
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <CommonButton ButtonValue={'Descover Place'} NavegateLink={'/tour'}></CommonButton>
                    </div>
                </div>
                <div className='flex-1'>
                    a
                </div>
            </div>
        </div>
    );
};

export default GoTravel;