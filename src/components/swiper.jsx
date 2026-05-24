"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSwiper = () => {
  return (
    <div className="overflow-x-hidden container mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoHeight
        rewind
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={0}
        slidesPerView={1}
        loop
      >
        <SwiperSlide>
          <div className=" hero min-h-[80vh] bg-[url('/banner.jpg')] bg-cover bg-center">
            {/* Overlay */}
            <div className="hero-overlay bg-black/60 p-10"></div>

            {/* Content */}
            <div className="hero-content text-center text-neutral-content px-4">
              <div className="max-w-3xl">
                <h1 className="mb-6 text-4xl md:text-6xl font-extrabold leading-tight">
                  Looking For Your Perfect Aesthetic Premium Tiles
                </h1>

                <p className="mb-8 text-base md:text-lg text-gray-200">
                  Explore premium quality and stylish tile collections designed
                  to transform your home, office, and commercial spaces
                  beautifully.
                </p>

                <Link href="/all-tiles" className="btn btn-primary btn-lg">
                  Browse Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" hero min-h-[80vh] bg-[url('/banner2.jpg')] bg-cover bg-center">
            {/* Overlay */}
            <div className="hero-overlay bg-black/60 p-10"></div>

            {/* Content */}
            <div className="hero-content text-center text-neutral-content px-4">
              <div className="max-w-3xl">
                <h1 className="mb-6 text-4xl md:text-6xl font-extrabold leading-tight">
                  Looking For Your Perfect Aesthetic Premium Tiles
                </h1>

                <p className="mb-8 text-base md:text-lg text-gray-200">
                  Explore premium quality and stylish tile collections designed
                  to transform your home, office, and commercial spaces
                  beautifully.
                </p>

                <Link href="/all-tiles" className="btn btn-primary btn-lg">
                  Browse Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-[80vh] bg-[url('/banner3.jpg')] bg-cover bg-center">
            {/* Overlay */}
            <div className="hero-overlay bg-black/60 p-10"></div>

            {/* Content */}
            <div className="hero-content text-center text-neutral-content px-4">
              <div className="max-w-3xl">
                <h1 className="mb-6 text-4xl md:text-6xl font-extrabold leading-tight">
                  Looking For Your Perfect Aesthetic Premium Tiles
                </h1>

                <p className="mb-8 text-base md:text-lg text-gray-200">
                  Explore premium quality and stylish tile collections designed
                  to transform your home, office, and commercial spaces
                  beautifully.
                </p>

                <Link href="/all-tiles" className="btn btn-primary btn-lg">
                  Browse Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSwiper;
