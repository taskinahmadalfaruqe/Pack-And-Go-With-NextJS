import React from 'react';
import Routes from './Routes';
import CommonButton from '../../utils/CommonButton/CommonButton';
import LogoSection from '../../utils/LogoSection/LogoSection';

const Navbar = () => {

    return (
        <div className="flex justify-between items-center  py-2 container">
            <div >
                <LogoSection></LogoSection>
            </div>
            <div>
                <Routes></Routes>
            </div>
            <div>
                <CommonButton ButtonValue={'Booking'} NavegateLink={'/booking'}></CommonButton>
            </div>
        </div>
    );
};

export default Navbar;