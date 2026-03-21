"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "TRANG CHỦ", href: "/", active: true },
  { label: "GIỚI THIỆU", href: "/gioi-thieu" },
  {
    label: "NHÀ Ở XÃ HỘI",
    href: "/nha-o-xa-hoi",
    dropdown: [
      { label: "Dự án", href: "/nha-o-xa-hoi/du-an" },
      { label: "Đối tượng", href: "/nha-o-xa-hoi/doi-tuong" },
      { label: "Tư vấn hồ sơ", href: "/nha-o-xa-hoi/tu-van" },
    ],
  },
  { label: "DỰ ÁN", href: "/du-an" },
  {
    label: "CHUYỂN NHƯỢNG",
    href: "/chuyen-nhuong",
    dropdown: [
      { label: "Căn hộ chuyển nhượng", href: "/chuyen-nhuong/can-ho" },
      { label: "Đăng bán căn hộ", href: "/chuyen-nhuong/dang-ban" },
    ],
  },
  { label: "LIÊN HỆ", href: "/lien-he" },
  { label: "TUYỂN DỤNG", href: "/tuyen-dung" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [openDesktopSub, setOpenDesktopSub] = useState<string | null>(null);

  const toggleSub = (label: string) => {
    setOpenSub((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="object-cover w-auto h-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.dropdown ? (
                    <button
                      onMouseEnter={() => setOpenDesktopSub(item.label)}
                      onMouseLeave={() => setOpenDesktopSub(null)}
                      className={`flex items-center gap-1.5 transition text-sm font-medium ${
                        item.active
                          ? "text-amber-400"
                          : "text-white hover:text-amber-400"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          openDesktopSub === item.label ? "rotate-180" : ""
                        }`}
                        strokeWidth={2}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`transition text-sm font-medium ${
                        item.active
                          ? "text-amber-400"
                          : "text-white hover:text-amber-400"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Desktop Dropdown Menu */}
                  {item.dropdown && (
                    <div
                      onMouseEnter={() => setOpenDesktopSub(item.label)}
                      onMouseLeave={() => setOpenDesktopSub(null)}
                      className={`absolute left-0 top-full mt-2 min-w-max rounded-md overflow-hidden transition-all duration-300
                      bg-black/80 backdrop-blur-lg border border-white/10 shadow-xl
                      ${
                        openDesktopSub === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2"
                      }`}
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2.5 text-xs tracking-widest text-white/70 hover:text-amber-400 hover:bg-white/10 transition-colors uppercase"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <button
              className="md:hidden text-white hover:text-amber-400 transition-colors p-1 z-[60] relative"
              onClick={() => {
                setMobileOpen(!mobileOpen);
                setOpenSub(null);
              }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden flex flex-col transition-all duration-500 ease-in-out ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "linear-gradient(180deg, #0d1b3e 0%, #091229 100%)",
        }}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-cover w-auto h-auto"
          />
        </div>

        <nav className="flex-1 flex flex-col justify-center px-10 gap-1 overflow-y-auto py-8">
          {navItems.map((item, index) => (
            <div
              key={item.label}
              className="transition-all duration-500"
              style={{
                transitionDelay: mobileOpen ? `${100 + index * 60}ms` : "0ms",
                transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleSub(item.label)}
                    className={`w-full flex items-center justify-center gap-2 py-5 text-sm font-semibold tracking-widest transition-colors border-b border-white/10 ${
                      item.active
                        ? "text-amber-400"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        openSub === item.label ? "rotate-180" : ""
                      }`}
                      strokeWidth={2}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSub === item.label
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-center py-3 text-xs tracking-widest text-white/50 hover:text-amber-400 transition-colors uppercase"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-center py-5 text-sm font-semibold tracking-widest border-b border-white/10 transition-colors ${
                    item.active
                      ? "text-amber-400"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="px-10 pb-10 pt-4 border-t border-white/10">
          <Link
            href="#"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center py-3.5 bg-amber-400 text-[#0d1b3e] text-sm font-bold tracking-widest uppercase hover:bg-amber-300 transition-colors"
          >
            Liên Hệ Ngay →
          </Link>
        </div>
      </div>
    </>
  );
}
