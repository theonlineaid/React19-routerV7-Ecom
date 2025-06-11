import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  "https://img.lazcdn.com/us/domino/30b23665-baf1-442c-af11-0233a9d4fc9b_BD-1976-688.jpg_2200x2200q80.jpg_.webp",
  "https://img.lazcdn.com/us/domino/1ba1fb2b-c792-454b-8646-e11634ffb56e_BD-1976-688.jpg_2200x2200q80.jpg_.webp",
  "https://img.lazcdn.com/us/domino/d95e2b38-1c31-403a-9230-9f4551c6aa35_BD-1976-688.jpg_2200x2200q80.jpg_.webp",
];

const EcommerceSlider = () => {
  return (
    <div className="container mx-auto p-6 relative w-full h-96">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="w-full h-full"
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Prev Arrow */}
        <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <div className="relative group w-[20px] h-[60px] rounded-sm overflow-hidden cursor-pointer">
            {/* Gradient border on hover */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-pink-500 to-purple-500" />

            {/* Blur black overlay (always visible) */}
            <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-sm rounded-md" />

            {/* Arrow icon */}
            <div className="relative z-20 flex items-center justify-center w-full h-full">
              <svg
                className="w-[24px] h-[24px] text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Custom Next Arrow */}
        <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <div className="relative group w-[20px] h-[60px] rounded-sm overflow-hidden cursor-pointer">
            {/* Gradient border on hover */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-pink-500 to-purple-500" />

            {/* Blur black overlay (always visible) */}
            <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-sm rounded-md" />

            {/* Arrow icon */}
            <div className="relative z-20 flex items-center justify-center w-full h-full">
              <svg
                className="w-[24px] h-[24px] text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default EcommerceSlider;
