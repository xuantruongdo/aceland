"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Ace Tower Premium",
    description:
      "Chung cư cao cấp Ace Tower Premium với tầm nhìn panorama 360 độ toàn thành phố Hà Nội.",
    image: "/images/ace-tower-premium.jpg",
    href: "/du-an/ace-tower-premium",
    offset: false,
  },
  {
    id: 2,
    name: "Diamond Plaza Saigon",
    description:
      "Diamond Plaza Saigon - Biểu tượng mới của cuộc sống thượng lưu tại trung tâm Quận 1.",
    image: "/images/diamond-plaza-saigon.jpg",
    href: "/du-an/diamond-plaza-saigon",
    offset: true,
  },
  {
    id: 3,
    name: "Emerald City Garden",
    description:
      "Emerald City Garden - Khu đô thị xanh sinh thái giữa lòng thủ đô với 40% diện tích cây xanh.",
    image: "/images/emerald-city-garden.jpg",
    href: "/du-an/emerald-city-garden",
    offset: false,
  },
];

export default function CommercialProjects() {
  return (
    <div className="w-full bg-[#3a3a3a] py-16 px-6 md:px-12 lg:px-20">
      <h2 className="text-center text-white text-2xl md:text-3xl font-light tracking-[0.15em] font-crimson mb-16 uppercase">
        Các Dự Án Thương Mại
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`flex flex-col ${project.offset ? "md:mt-16" : ""}`}
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
              <h3 className="text-white text-[18px] font-montserrat">{project.name}</h3>

              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                {project.description}
              </p>

              <Link
                href={project.href}
                className="
                  mt-2 px-4 p-2
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
