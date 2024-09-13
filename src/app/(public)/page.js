import Banner from '@/component/ui/Banner/Banner';
import EveryMonthEvent from '@/component/ui/EveryMonthEvent/EveryMonthEvent';
import GoTravel from '@/component/ui/GoTravel/GoTravel';
import PopularDestination from '@/component/ui/PopularDestination/PopularDestination';
import SelectedDestination from '@/component/ui/SelectedDestination/SelectedDestination';
import Subscribe from '@/component/ui/Subscribe/Subscribe';
import TravelBenefit from '@/component/ui/TravelBenefit/TravelBenefit';
import React from 'react';

export const metadata = {
  title: 'Pack & Go',
};

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <TravelBenefit></TravelBenefit>
      <PopularDestination></PopularDestination>
      <GoTravel></GoTravel>
      <SelectedDestination></SelectedDestination>
      <EveryMonthEvent></EveryMonthEvent>
      <Subscribe></Subscribe>
    </div>
  );
};

export default HomePage;