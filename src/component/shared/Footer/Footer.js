import React from 'react';
import FooterNav from './FooterNav';
import TourNav from './TourNav';
import SupportNav from './SupportNav';
import UseFullNav from './UseFullNav';

const Footer = () => {
    return (
        <div className='bg-WhiteColor py-24'>
            <div className='container flex justify-between text-ParagraphColor'>
                <FooterNav></FooterNav>
                <TourNav></TourNav>
                <SupportNav></SupportNav>
                <UseFullNav></UseFullNav>
            </div>
        </div>
    );
};

export default Footer;