import CommonTitle from '@/component/shared/CommonTitle/CommonTitle';
import TourCard from '@/component/utils/TourCard/TourCard';
import React from 'react';

const PopularDestination = () => {
    return (
        <div className='container'>
            <CommonTitle
                SectionTitle={"Popular DestinationTravel Benefit For User"}
                SectionDescription={"We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes."}
            >
            </CommonTitle>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <TourCard></TourCard>
                <TourCard></TourCard>
                <TourCard></TourCard>
                <TourCard></TourCard>
            </div>
        </div>
    );
};

export default PopularDestination;