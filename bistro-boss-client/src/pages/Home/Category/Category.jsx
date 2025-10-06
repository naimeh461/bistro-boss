import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const slides = [
  { img: slide1, title: "Salads" },
  { img: slide2, title: "Pizzas" },
  { img: slide3, title: "Soups" },
  { img: slide4, title: "Desserts" },
  { img: slide5, title: "Grilled" },
];

const Category = () => {
  return (
    <section className="bg-gradient-to-b from-[#fefefe] to-[#f0f0f0] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          subHeading={"From 11.00am to 10.00pm"}
          heading={"Order Online"}
        />

        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper mt-12"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-64 md:h-72 lg:h-80 object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                {/* Glassmorphic overlay */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md px-6 py-3 mb-6 rounded-2xl shadow-lg">
                    {slide.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
