"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";
import { PROJECTS } from "@/constants";

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
        {PROJECTS.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <Image
                src={slide.image}
                alt={slide.name}
                fill
                className="object-cover"
                priority={index === 0}
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
                <div className="w-full bg-black/10 backdrop-blur-sm px-5 sm:px-8 py-6 sm:py-10 shadow-2xl flex justify-center animate-fadeInUp">
                  <div className="w-full md:max-w-[70%]">
                    <h1 className="text-xl sm:text-3xl lg:text-6xl tracking-[0.12em] font-medium text-white mb-3 sm:mb-4 leading-snug">
                      {slide.name}
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                      <p className="flex-1 min-w-0 text-sm sm:text-base text-gray-200 line-clamp-2 md:line-clamp-1">
                        {slide.info}
                      </p>

                      <Link
                        href={`/projects/${slide.slug}`}
                        className="shrink-0 w-fit group relative inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white border border-cyan-400 whitespace-nowrap overflow-hidden transition-all duration-300 hover:scale-[1.03]"
                      >
                        <span className="absolute inset-0 bg-black/80 opacity-70 group-hover:opacity-100 transition duration-300" />

                        <span className="absolute inset-0 border border-cyan-400 blur-sm opacity-60 group-hover:opacity-100 group-hover:blur-md transition-all duration-300" />

                        <span className="relative z-10 flex items-center gap-2">
                          Chi tiết
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
