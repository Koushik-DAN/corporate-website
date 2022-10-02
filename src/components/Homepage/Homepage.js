import React from 'react';
import Carousel from '../Carousel/Carousel';
import Strength from '../Strength/Strength';

const Homepage = () => {
    return (
        <div className='homepage'>
            <Carousel></Carousel>
            <div className='content w-[80%] mx-auto'>
            <div className=' my-5'>
                <h1 className='text-center text-3xl mb-5'>Our Strengths</h1>
                <Strength></Strength>
            </div>
            </div>
        </div>
    );
};

export default Homepage;