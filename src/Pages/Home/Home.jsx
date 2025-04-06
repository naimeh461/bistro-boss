import React from 'react';
import Banner from './Banner.jsx/Banner';
import Category from './Category/Category';

import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
        </div>
    );
};

export default Home;