"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  IssuedBy,
  MaritalStatus,
  PropertyOwnership,
  TARGET_GROUP_OPTIONS,
} from "@/constants";
import RadioOption from "../ui/RadioOption";

interface FormState {
  fullName: string;
  dateOfBirth: string;
  nationalId: string;
  issueDate: string;
  issuedBy: IssuedBy;
  phoneNumber: string;
  maritalStatus: MaritalStatus;
  workplaceName: string;
  occupation: string;
  monthlyIncome: string;
  currentAddress: string;
  permanentAddress: string;
  propertyOwnership: PropertyOwnership;
  targetGroup: string;
  referrer: string;
}

const INPUT_CLASS =
  "w-full bg-transparent text-sm tracking-[0.08em] text-gray-700 placeholder-gray-300 outline-none border-b border-gray-300 pb-1 pt-0.5 focus:border-gray-500 transition-colors";
const LABEL_CLASS =
  "block text-sm tracking-[0.12em] text-gray-500 uppercase mb-1 mt-5";

export default function RegistrationForm() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    dateOfBirth: "",
    nationalId: "",
    issueDate: "",
    issuedBy: IssuedBy.Empty,
    phoneNumber: "",
    maritalStatus: MaritalStatus.Empty,
    workplaceName: "",
    occupation: "",
    monthlyIncome: "",
    currentAddress: "",
    permanentAddress: "",
    propertyOwnership: PropertyOwnership.Empty,
    targetGroup: "",
    referrer: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = () => console.log(form);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-10 md:py-20">
      <div className="w-full max-w-[700px] bg-white">
        <div className="px-10 py-5 flex items-center justify-center bg-gradient-to-r from-[#0175CD] to-[#00133A] mb-6">
          <h2 className="text-xl md:text-2xl tracking-[0.15em] font-semibold uppercase text-center text-[#FFD152]">
            Đăng Ký Thông Tin
          </h2>
        </div>

        <div className="px-6 pb-10">
          <label className={LABEL_CLASS}>
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            value={form.fullName}
            onChange={(e) => setField("fullName", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            Ngày sinh <span className="text-red-500">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            placeholder="DD/MM/YYYY"
            value={form.dateOfBirth}
            onChange={(e) => setField("dateOfBirth", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            CCCD/Căn cước <span className="text-red-500">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            value={form.nationalId}
            onChange={(e) => setField("nationalId", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            Ngày cấp <span className="text-red-500">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            value={form.issueDate}
            onChange={(e) => setField("issueDate", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            Nơi cấp <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <RadioOption
              label="Bộ Công An"
              isActive={form.issuedBy === IssuedBy.MinistryOfPublicSecurity}
              onClick={() =>
                setField("issuedBy", IssuedBy.MinistryOfPublicSecurity)
              }
            />
            <RadioOption
              label="Cục Cảnh Sát Quản Lý Hành Chính Và Trật Tự Xã Hội"
              isActive={form.issuedBy === IssuedBy.PoliceAdminDepartment}
              onClick={() =>
                setField("issuedBy", IssuedBy.PoliceAdminDepartment)
              }
            />
          </div>

          <label className={LABEL_CLASS}>
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            type="tel"
            value={form.phoneNumber}
            onChange={(e) => setField("phoneNumber", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            Tình trạng hôn nhân <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-6 mt-4">
            <RadioOption
              label="Độc thân"
              isActive={form.maritalStatus === MaritalStatus.Single}
              onClick={() => setField("maritalStatus", MaritalStatus.Single)}
            />
            <RadioOption
              label="Đã kết hôn"
              isActive={form.maritalStatus === MaritalStatus.Married}
              onClick={() => setField("maritalStatus", MaritalStatus.Married)}
            />
          </div>

          <label className={LABEL_CLASS}>
            Tên nơi làm việc <span className="text-red-500">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            value={form.workplaceName}
            onChange={(e) => setField("workplaceName", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            Nghề nghiệp <span className="text-red-500">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            value={form.occupation}
            onChange={(e) => setField("occupation", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            Lương bình quân tháng thực nhận{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            value={form.monthlyIncome}
            onChange={(e) => setField("monthlyIncome", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            Nơi ở hiện tại <span className="text-red-500">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            value={form.currentAddress}
            onChange={(e) => setField("currentAddress", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            Nơi đăng ký thường trú <span className="text-red-500">*</span>
          </label>
          <input
            className={INPUT_CLASS}
            value={form.permanentAddress}
            onChange={(e) => setField("permanentAddress", e.target.value)}
          />

          <label className={LABEL_CLASS}>
            Nhà ở tại tỉnh/TP có dự án <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col gap-2 mt-4">
            <RadioOption
              label="Chưa có"
              isActive={form.propertyOwnership === PropertyOwnership.None}
              onClick={() =>
                setField("propertyOwnership", PropertyOwnership.None)
              }
            />
            <RadioOption
              label="Đã có (Diện tích bình quân/người ≤15m2)"
              isActive={
                form.propertyOwnership === PropertyOwnership.OwnedUnder15
              }
              onClick={() =>
                setField("propertyOwnership", PropertyOwnership.OwnedUnder15)
              }
            />
            <RadioOption
              label="Đã có (Diện tích bình quân/người ≥15m2)"
              isActive={
                form.propertyOwnership === PropertyOwnership.OwnedOver15
              }
              onClick={() =>
                setField("propertyOwnership", PropertyOwnership.OwnedOver15)
              }
            />
          </div>

          <label className={LABEL_CLASS}>
            Đối tượng <span className="text-red-500">*</span>
          </label>
          <div className="relative border-b border-gray-300 pb-1 mt-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <span
                className={`text-sm tracking-[0.08em] uppercase ${
                  form.targetGroup ? "text-gray-700" : "text-gray-300"
                }`}
              >
                {form.targetGroup || ""}
              </span>
              <ChevronDown
                size={14}
                className={`text-gray-400 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isDropdownOpen && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 shadow-lg z-20 max-h-44 overflow-y-auto">
                {TARGET_GROUP_OPTIONS.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      setField("targetGroup", option);
                      setIsDropdownOpen(false);
                    }}
                    className="px-4 py-3 text-xs tracking-[0.08em] text-gray-600 hover:bg-gray-50 cursor-pointer uppercase"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          <label className={LABEL_CLASS}>Người giới thiệu (nếu có)</label>
          <input
            className={INPUT_CLASS}
            value={form.referrer}
            onChange={(e) => setField("referrer", e.target.value)}
          />

          <div className="flex justify-center pt-8">
            <button
              onClick={handleSubmit}
              className="px-12 py-2.5 text-sm tracking-[0.2em] uppercase font-semibold bg-gradient-to-r from-[#0175CD] to-[#00133A] text-[#FFD152] hover:opacity-90 transition-opacity cursor-pointer"
            >
              Nộp Hồ Sơ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
