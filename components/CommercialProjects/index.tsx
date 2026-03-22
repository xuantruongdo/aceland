"use client";

import { PROJECTS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function CommercialProjects() {
  return (
    <div className="w-full bg-[#3a3a3a] py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-center text-white text-2xl md:text-3xl font-light tracking-[0.15em] font-crimson mb-16 uppercase">
        Các Dự Án Thương Mại
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
        {PROJECTS.slice(0, 3).map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col ${index === 1 ? "md:mt-16" : ""}`}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden group">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col items-center text-center mt-6 space-y-3 px-2">
              <h3 className="text-white text-[18px] font-montserrat">
                {project.name}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed max-w-xs line-clamp-2">
                {project.info[0]}
              </p>

              <Link
                href={`/projects/${project.slug}`}
                className="
                  mt-2 px-4 py-2
                  border border-white text-white
                  text-xs uppercase rounded font-semibold
                  transition-all duration-300
                  hover:bg-white hover:text-[#3a3a3a]
                  hover:shadow-lg
                "
              >
                Chi Tiết
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
