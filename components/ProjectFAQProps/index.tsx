"use client";

import { useState } from "react";
import { Project } from "@/types";
import Accordion from "../ui/AccordionItem";
import Image from "next/image";

interface ProjectFAQProps {
  project: Project;
}

export default function ProjectFAQ({ project }: ProjectFAQProps) {
  const [openIds, setOpenIds] = useState<Set<number>>(
    new Set([1, 2, 3, 4, 5, 6]),
  );

  const toggle = (id: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const faqItems = [
    {
      id: 1,
      title: `Liên hệ tư vấn dự án . ${project.contact}`,
      content: <></>,
    },
    {
      id: 2,
      title: "Thông tin dự án",
      content: (
        <>
          {project.info.map((text, idx) => (
            <p key={idx} className="mb-2">
              {text}
            </p>
          ))}
        </>
      ),
    },
    {
      id: 3,
      title: "Vị trí - khu vực",
      content: (
        <InfoBlock
          image={project.location.image}
          content={project.location.content}
          reverse={false}
        />
      ),
    },
    {
      id: 4,
      title: "Tiềm năng phát triển",
      content: (
        <InfoBlock
          image={project.potential.image}
          content={project.potential.content}
          reverse={true}
        />
      ),
    },
    {
      id: 5,
      title: "Không gian sống",
      content: (
        <InfoBlock
          image={project.livingSpace.image}
          content={project.livingSpace.content}
          reverse={false}
        />
      ),
    },
    {
      id: 6,
      title: "Chính sách bán hàng",
      content: (
        <InfoBlock
          image={project.salesPolicy.image}
          content={project.salesPolicy.content}
          reverse={true}
        />
      ),
    },
    {
      id: 7,
      title: "Mặt bằng & hình ảnh",
      content: (
        <div className="columns-2 gap-4 space-y-4">
          {project.images.map((img, idx) => (
            <div key={idx} className="break-inside-avoid">
              <Image
                src={img}
                alt={`project-${idx}`}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full py-12 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${project.image})` }}
      />

      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="max-w-5xl mx-auto backdrop-blur-md bg-slate-800/60 border border-white/10 shadow-2xl overflow-hidden">
        {faqItems.map((item) => (
          <Accordion
            key={item.id}
            item={item}
            isOpen={openIds.has(item.id)}
            onToggle={() => toggle(item.id)}
            contentClass="text-white"
          />
        ))}
      </div>
    </div>
  );
}

const InfoBlock = ({
  image,
  content,
  reverse = false,
}: {
  image: string;
  content: string[];
  reverse?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-6 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2">
        <img src={image} alt="project" className="w-full object-cover" />
      </div>

      <div className="w-full md:w-1/2">
        {content.map((text, idx) => (
          <p key={idx} className="mb-2">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};
