"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { APARTMENT_TYPE_OPTIONS, ApartmentType } from "@/constants";

const INPUT_CLASS =
  "w-full bg-transparent text-sm tracking-[0.06em] text-gray-700 placeholder-transparent outline-none border-b border-gray-300 pb-1 pt-0.5 focus:border-gray-500 transition-colors";
const LABEL_CLASS =
  "block text-sm tracking-[0.12em] text-gray-500 uppercase mt-5 mb-1";

interface ApartmentFormState {
  apartmentName: string;
  projectName: string;
  address: string;
  area: string;
  estimatedPrice: string;
  bedroomCount: string;
  apartmentType: ApartmentType;
  description: string;
  notes: string;
  sellerName: string;
  phoneNumber: string;
  email: string;
}

export default function ApartmentListingForm() {
  const [form, setForm] = useState<ApartmentFormState>({
    apartmentName: "",
    projectName: "",
    address: "",
    area: "",
    estimatedPrice: "",
    bedroomCount: "",
    apartmentType: ApartmentType.Empty,
    description: "",
    notes: "",
    sellerName: "",
    phoneNumber: "",
    email: "",
  });

  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);

  const setField = <K extends keyof ApartmentFormState>(
    key: K,
    value: ApartmentFormState[K],
  ) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = () => console.log(form);

  const selectedType = APARTMENT_TYPE_OPTIONS.find(
    (o) => o.value === form.apartmentType,
  );

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-10 md:py-20">
      <div className="w-full max-w-[700px] bg-white">
        <div className="px-10 py-5 rounded flex items-center justify-center bg-gradient-to-r from-[#0175CD] to-[#00133A] mb-6">
          <h2 className="font-crimson text-xl md:text-2xl tracking-[0.15em] uppercase text-center text-[#FFD152]">
            Biểu Mẫu Đăng Bán Căn Hộ
          </h2>
        </div>

        <div className="px-2 pb-10">
          <label className={LABEL_CLASS}>
            Tên căn hộ<span className="text-red-500 ml-0.5">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            value={form.apartmentName}
            onChange={(e) => setField("apartmentName", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            Tên dự án<span className="text-red-500 ml-0.5">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            value={form.projectName}
            onChange={(e) => setField("projectName", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            Địa chỉ<span className="text-red-500 ml-0.5">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            value={form.address}
            onChange={(e) => setField("address", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            Diện tích<span className="text-red-500 ml-0.5">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            value={form.area}
            onChange={(e) => setField("area", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            Giá dự kiến<span className="text-red-500 ml-0.5">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            value={form.estimatedPrice}
            onChange={(e) => setField("estimatedPrice", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            Số phòng ngủ<span className="text-red-500 ml-0.5">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            type="number"
            min={0}
            value={form.bedroomCount}
            onChange={(e) => setField("bedroomCount", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            Loại hình<span className="text-red-500 ml-0.5">*</span>
          </label>
          <div className="relative border-b border-gray-300 pb-1 mt-0.5">
            <div
              className="flex items-center justify-between cursor-pointer py-0.5"
              onClick={() => setIsTypeDropdownOpen((prev) => !prev)}
            >
              <span
                className={`text-sm tracking-[0.06em] ${
                  selectedType
                    ? "text-gray-700"
                    : "text-transparent select-none"
                }`}
              >
                {selectedType?.label || "placeholder"}
              </span>
              <ChevronDown
                size={14}
                className={`text-gray-500 transition-transform duration-200 ${
                  isTypeDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isTypeDropdownOpen && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 shadow-lg z-20">
                {APARTMENT_TYPE_OPTIONS.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => {
                      setField("apartmentType", option.value);
                      setIsTypeDropdownOpen(false);
                    }}
                    className={`px-4 py-3 text-sm tracking-[0.06em] cursor-pointer hover:bg-gray-50 transition-colors
                      ${form.apartmentType === option.value ? "text-[#0175CD] font-medium" : "text-gray-600"}`}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <label className={LABEL_CLASS}>Mô tả căn hộ</label>
          <textarea
            rows={3}
            className="w-full bg-transparent text-xs tracking-[0.06em] text-gray-700 outline-none border-b border-gray-300 pb-1 pt-0.5 focus:border-gray-500 transition-colors resize-none"
            value={form.description}
            onChange={(e) => setField("description", e.target.value)}
          />

          <label className={LABEL_CLASS}>Ghi chú</label>
          <input
            className={INPUT_CLASS}
            value={form.notes}
            onChange={(e) => setField("notes", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            Họ tên người đăng bán<span className="text-red-500 ml-0.5">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            value={form.sellerName}
            onChange={(e) => setField("sellerName", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            Số điện thoại liên hệ<span className="text-red-500 ml-0.5">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            type="tel"
            value={form.phoneNumber}
            onChange={(e) => setField("phoneNumber", e.target.value)}
          />

          <label className={LABEL_CLASS}>Địa chỉ email</label>
          <input
            className={INPUT_CLASS}
            type="email"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
          />

          <div className="flex justify-center pt-8">
            <button
              onClick={handleSubmit}
              className="px-12 py-4 text-sm rounded tracking-[0.2em] uppercase font-semibold bg-gradient-to-r from-[#0175CD] to-[#00133A] text-[#FFD152] hover:opacity-90 transition-opacity cursor-pointer"
            >
              Gửi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
