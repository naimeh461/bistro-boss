import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    const slides = [
        { image: slide1, title: "Salads" },
        { image: slide2, title: "Pizza" },
        { image: slide3, title: "Soup" },
        { image: slide4, title: "Desserts" },
        { image: slide5, title: "Drinks" }
    ];

    return (
        <>
            <SectionTitle   
                subHeading = {"From 11.00 am to 10.00pm"}
                heading = {"Order Online"}>
            </SectionTitle>
            <section>

                <Swiper
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={40}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="relative">
                            <img
                                className="rounded-md w-full h-full object-cover"
                                src={slide.image}
                                alt={slide.title}
                            />
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md"></div>
                            {/* Centered Text */}
                            <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl uppercase text-white text-center z-10">
                                {slide.title}
                            </h3>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
};

export default Category;
