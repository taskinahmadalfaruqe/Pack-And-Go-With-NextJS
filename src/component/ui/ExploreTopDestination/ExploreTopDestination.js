import CommonButton from '@/component/utils/CommonButton/CommonButton';
import SmallTitle from '@/component/utils/SmallTitle/SmallTitle';
import TourCard from '@/component/utils/TourCard/TourCard';
import React from 'react';

const ExploreTopDestination = () => {
    return (
        <div className='container py-8'>
            <div>
                <SmallTitle
                    SmallTitle={"Explore Top Destination"}
                    SmallDescription={"We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes."}
                >
                </SmallTitle>
            </div>
            <div className='py-8 flex gap-5 items-center'>
                <CommonButton
                    ButtonValue={"Popular Destination"}
                    NavegateLink={"/"}
                ></CommonButton>
                <CommonButton
                    ButtonValue={"Art & Culture"}
                    NavegateLink={"/"}
                ></CommonButton>
                <CommonButton
                    ButtonValue={"Outdoor Adventer"}
                    NavegateLink={"/"}
                ></CommonButton>
                <CommonButton
                    ButtonValue={"Mountain"}
                    NavegateLink={"/"}
                ></CommonButton>
                <CommonButton
                    ButtonValue={"Beach Destination"}
                    NavegateLink={"/"}
                ></CommonButton>
            </div>
            <div className=' pt-5'>
                <TourCard></TourCard>
            </div>
        </div>
    );
};

export default ExploreTopDestination;