"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

const slides = [
  {
    image: "/images/banner-1.jpg",
    title: "DỰ ÁN NHÀ Ở XÃ HỘI SUN VALLEY",
    subtitle:
      "Nơi an cư lý tưởng với hệ sinh thái tiện ích hiện đại và không gian sống xanh chuẩn mực",
    buttonText: "CHI TIẾT",
    href: "/du-an/sun-valley",
  },
  {
    image: "/images/banner-2.jpg",
    title: "DỰ ÁN NHÀ Ở XÃ HỘI",
    subtitle:
      "Giải pháp nhà ở bền vững, đáp ứng đầy đủ nhu cầu sinh sống và đầu tư lâu dài",
    buttonText: "CHI TIẾT",
    href: "/du-an/sun-valley-2",
  },
  {
    image: "/images/banner-3.jpg",
    title: "DỰ ÁN NHÀ Ở XÃ HỘI",
    subtitle:
      "Giải pháp nhà ở bền vững, đáp ứng đầy đủ nhu cầu sinh sống và đầu tư lâu dài",
    buttonText: "CHI TIẾT",
    href: "/du-an/sun-valley-2",
  },
];

export default function HeroBanner() {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-end pb-24">
                <div className="w-full bg-black/5 backdrop-blur-xs px-8 py-10 shadow-2xl flex justify-center animate-fadeInUp">
                  <div className="max-w-6xl">
                    <h1 className="text-2xl sm:text-3xl lg:text-6xl text-white mb-4 leading-snug">
                      {slide.title}
                    </h1>

                    <div className="md:flex items-center gap-4 md:gap-20">
                      <p className="text-sm sm:text-base text-gray-200 mb-6">
                        {slide.subtitle}
                      </p>

                      <Link
                        href={slide.href}
                        className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide text-white border border-cyan-400 rounded-md overflow-hidden transition-all duration-300"
                      >
                        <span className="absolute inset-0 bg-black/90 opacity-80 group-hover:opacity-100 transition" />
                        <span className="absolute inset-0 rounded-md border border-cyan-400 blur-sm opacity-70 group-hover:opacity-100 group-hover:blur-md transition-all duration-300" />
                        <span className="relative z-10 flex items-center gap-2">
                          {slide.buttonText}
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
