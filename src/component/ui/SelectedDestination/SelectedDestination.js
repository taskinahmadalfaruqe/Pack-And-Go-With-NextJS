import CommonButton from '@/component/utils/CommonButton/CommonButton';
import SmallTitle from '@/component/utils/SmallTitle/SmallTitle';
import React from 'react';

const SelectedDestination = () => {
    return (
        <div className='py-14'>
            <div className='container'>
                <div className='space-y-5'>
                    <SmallTitle
                        SmallTitle={"We have more than 1000 selected Destination"}
                        SmallDescription={"You can choose one of many option that we have on our website. Every destination have been 4+ star rated by our user before. You can search by clicking our button on below of the this text man."}
                    ></SmallTitle>
                    <CommonButton
                        ButtonValue={'Search Destination'}
                        NavegateLink={"/tour"}
                    ></CommonButton>
                </div>
                <div>
                    h
                </div>
            </div>
        </div>
    );
};

export default SelectedDestination;