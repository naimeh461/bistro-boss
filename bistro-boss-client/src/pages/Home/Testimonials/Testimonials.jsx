import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20 relative z-10">
      <SectionTitle
        subHeading="What Our Clients Say"
        heading="Testimonials"
      ></SectionTitle>

      <div className="relative max-w-4xl mx-auto">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center text-center mx-6 md:mx-20 my-16 p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg"
              >
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p className="py-6 text-gray-200 italic text-lg leading-relaxed">
                  “{review.details}”
                </p>
                <h3 className="text-xl font-semibold text-orange-400">
                  — {review.name}
                </h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* background gradient glow */}
        <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 -z-10 rounded-3xl" />
      </div>
    </section>
  );
};

export default Testimonials;
