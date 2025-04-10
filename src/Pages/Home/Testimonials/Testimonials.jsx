import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className="my-20 max-w-6xl mx-auto px-4">
            <SectionTitle
                heading="Testimonials"
                subHeading="What our client said"
            />

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col items-center justify-center text-center mx-auto max-w-2xl">
                            <Rating
                                style={{ maxWidth: 160 }}
                                value={review.rating}
                                readOnly
                                className="mb-4"
                            />
                            <p className="text-gray-600 text-lg italic leading-relaxed mb-6">
                                “{review.details}”
                            </p>
                            <h3 className="text-xl font-semibold text-orange-500">
                                — {review.name}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
