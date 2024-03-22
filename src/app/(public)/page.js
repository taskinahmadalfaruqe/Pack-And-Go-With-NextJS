import Banner from '@/component/ui/Banner/Banner';
import PopularDestination from '@/component/ui/PopularDestination/PopularDestination';
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
    </div>
  );
};

export default HomePage;