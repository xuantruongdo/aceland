"use client";

import { useState } from "react";
import { User, Mail, Phone, Building2, ChevronDown } from "lucide-react";

const projectOptions = [
  "Ace Tower Premium",
  "393 Lĩnh Nam",
  "An Phú Social Housing",
  "Aurora Shophouse",
  "Bình Tân Greenhouse",
  "CT3 CT4 Kim Chung",
  "Diamond Plaza Saigon",
  "Emerald City Garden",
];

export default function ConsultationForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });
  const [open, setOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-[460px] bg-white shadow-xl overflow-hidden">
        {/* Header */}
        <div
          className="px-10 py-8 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #1a3a6b 0%, #0d2247 100%)",
          }}
        >
          <h2
            className="text-xl md:text-2xl tracking-[0.25em] uppercase text-center"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "#c9a84c",
            }}
          >
            Đăng Ký Tư Vấn
          </h2>
        </div>

        {/* Form body */}
        <div className="px-10 py-8 space-y-7">
          {/* Full name */}
          <div className="flex items-center gap-3 border-b border-gray-300 pb-2">
            <User size={15} className="text-gray-400 shrink-0" />
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="HỌ VÀ TÊN"
              className="flex-1 bg-transparent text-xs tracking-[0.15em] text-gray-500 placeholder-gray-400 outline-none uppercase"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 border-b border-gray-300 pb-2">
            <Mail size={15} className="text-gray-400 shrink-0" />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="EMAIL"
              type="email"
              className="flex-1 bg-transparent text-xs tracking-[0.15em] text-gray-500 placeholder-gray-400 outline-none uppercase"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 border-b border-gray-300 pb-2">
            <Phone size={15} className="text-gray-400 shrink-0" />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="SỐ ĐIỆN THOẠI"
              type="tel"
              className="flex-1 bg-transparent text-xs tracking-[0.15em] text-gray-500 placeholder-gray-400 outline-none uppercase"
            />
          </div>

          {/* Project dropdown */}
          <div className="relative border-b border-gray-300 pb-2">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <Building2 size={15} className="text-gray-400 shrink-0" />
              <span
                className={`flex-1 text-xs tracking-[0.15em] uppercase select-none ${
                  form.project ? "text-gray-600" : "text-gray-400"
                }`}
              >
                {form.project || "DỰ ÁN MUỐN TƯ VẤN"}
              </span>
              <ChevronDown
                size={15}
                className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
            </div>

            {open && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 shadow-lg z-20 max-h-40 overflow-y-auto">
                {projectOptions.map((opt) => (
                  <div
                    key={opt}
                    onClick={() => {
                      setForm({ ...form, project: opt });
                      setOpen(false);
                    }}
                    className="px-4 py-3 text-xs tracking-[0.1em] text-gray-600 hover:bg-gray-50 cursor-pointer uppercase"
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-gray-300 pb-2">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="LỜI NHẮN"
              rows={4}
              className="w-full bg-transparent text-xs tracking-[0.15em] text-gray-500 placeholder-gray-400 outline-none resize-none uppercase"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-2">
            <button
              onClick={handleSubmit}
              className="px-16 py-3 text-sm tracking-[0.25em] uppercase font-medium text-white transition-opacity duration-300 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #1a3a6b 0%, #0d2247 100%)",
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              Gửi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
