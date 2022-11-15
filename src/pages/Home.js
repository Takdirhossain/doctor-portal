import React from 'react';
import Appoinment from '../components/Appoinment';
import Cardsinfo from '../components/Cardsinfo';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Hero></Hero>
            <Cardsinfo></Cardsinfo>
           <Services></Services>
           <Appoinment></Appoinment>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;