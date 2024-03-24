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
            <div className='mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <TourCard
                    ImageLInk={"https://i.ibb.co/MSR0zkx/paris.jpg"}
                    TourTitle={"Paris, Franch"}
                    TourDescription={"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam"}
                ></TourCard>
                <TourCard
                    ImageLInk={"https://i.ibb.co/7SwtndL/lak.jpg"}
                    TourTitle={"Lake Thun, Switzerland"}
                    TourDescription={"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam"}
                ></TourCard>
                <TourCard
                    ImageLInk={"https://i.ibb.co/Zdh6CsT/italy.jpg"}
                    TourTitle={"Venice, Italy"}
                    TourDescription={"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam"}
                ></TourCard>
                <TourCard
                    ImageLInk={"https://i.ibb.co/zSb854W/bali.jpg"}
                    TourTitle={"Mount Agung, Bali"}
                    TourDescription={"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam"}
                ></TourCard>
            </div>
        </div>
    );
};

export default PopularDestination;