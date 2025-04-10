import React from 'react';
import Banner from './Banner.jsx/Banner';
import Category from './Category/Category';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from './Featured/Fetured';
import Testimonials from './Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;