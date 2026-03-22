"use client";

import { useState } from "react";
import Image from "next/image";
import { Status } from "@/types";
import {
  AREA_OPTIONS,
  PAGE_SIZE,
  PROJECTS,
  PROVINCES,
  PROJECT_TABS,
  WARDS,
} from "@/constants";
import Dropdown from "../ui/Dropdown";
import Pagination from "../ui/Pagination";
import Link from "next/link";

interface ProjectListingProps {
  filterByStatus?: boolean;
  filter?: boolean;
  title?: string;
  backgroundClass?: string;
}

export default function ProjectListing({
  filterByStatus = true,
  filter = true,
  title,
  backgroundClass,
}: ProjectListingProps) {
  const [activeTab, setActiveTab] = useState<Status>(Status.ON_SALE);
  const [province, setProvince] = useState("");
  const [ward, setWard] = useState("");
  const [area, setArea] = useState("");
  const [page, setPage] = useState(1);

  const resetFilters = () => {
    setProvince("");
    setWard("");
    setArea("");
    setPage(1);
  };

  const filtered = PROJECTS.filter((p) => {
    if (p.status !== activeTab) return false;
    if (province && p.province !== province) return false;
    if (ward && p.ward !== ward) return false;
    if (area && p.area !== area) return false;
    return true;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handlePage = (p: number) => {
    setPage(p);
  };

  return (
    <div className="w-full bg-white">
      {filterByStatus && (
        <div className="flex justify-center gap-4 py-8 px-4">
          {PROJECT_TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  resetFilters();
                }}
                className={`relative w-[200px] h-[100px] overflow-hidden cursor-pointer transition-all duration-300
                ${isActive ? "ring-2 ring-[#c9a84c]" : "opacity-70 hover:opacity-90"}`}
              >
                <Image
                  src={tab.image}
                  alt={tab.label}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 ${isActive ? "bg-black/40" : "bg-black/55"}`}
                />
                <span className="absolute inset-0 flex items-center justify-center text-white text-xs tracking-[0.18em] font-medium uppercase">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {filter && (
        <div className="bg-[#333333] px-8 md:px-16 py-8">
          <div className="flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto">
            <Dropdown
              placeholder="Tỉnh/Thành phố"
              options={PROVINCES.map((p) => ({ value: p, label: p }))}
              value={province}
              onChange={(v) => {
                setProvince(v);
                setWard("");
                setPage(1);
              }}
            />
            <Dropdown
              placeholder="Xã/Phường"
              options={
                province
                  ? (WARDS[province] || []).map((w) => ({ value: w, label: w }))
                  : []
              }
              value={ward}
              onChange={(v) => {
                setWard(v);
                setPage(1);
              }}
              disabled={!province}
            />
            <Dropdown
              placeholder="Diện tích"
              options={AREA_OPTIONS}
              value={area}
              onChange={(v) => {
                setArea(v);
                setPage(1);
              }}
            />
          </div>
        </div>
      )}

      <div
        className={`px-8 md:px-16 pt-10 min-h-[400px] ${backgroundClass ? backgroundClass : "bg-gray-50"}`}
      >
        {title && (
          <h2 className="text-2xl md:text-3xl pb-8 font-crimson font-light text-center text-gray-900 tracking-wide">
            {title}
          </h2>
        )}

        {paginated.length === 0 ? (
          <div className="flex items-center justify-center py-24 text-gray-400 text-sm tracking-widest uppercase">
            Không tìm thấy dự án phù hợp
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {paginated.map((project) => (
              <Link href={`/projects/${project.slug}`}
                key={project.id}
                className="relative group overflow-hidden cursor-pointer aspect-[4/3]"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                  <h3 className="text-white font-semibold text-base tracking-[0.08em] uppercase">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 text-xs mt-1">
                    {project.province}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="max-w-5xl mx-auto">
          <Pagination current={page} total={totalPages} onChange={handlePage} />
        </div>
      </div>
    </div>
  );
}
