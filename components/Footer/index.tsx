import Image from "next/image";
import Link from "next/link";
import { Mail, Facebook, Phone, MapPin, Hash } from "lucide-react";

const navLinks = [
  { label: "Trang Chủ", href: "/" },
  { label: "Giới Thiệu", href: "/about-us" },
  { label: "Dự Án", href: "/projects" },
  { label: "Nhà Ở Xã Hội", href: "/social-house/projects" },
  { label: "Chuyển Nhượng", href: "/transfer" },
  { label: "Liên Hệ", href: "/contact-us" },
  { label: "Tuyển Dụng", href: "/careers" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white px-8 md:px-16 lg:px-24 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        <div className="space-y-5">
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="object-contain w-auto h-auto"
            />
          </Link>
          <p className="text-sm font-semibold text-white leading-snug mt-4">
            Công ty CP Dịch vụ và Đầu tư Ace Land
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-gray-400 text-sm">
              <Mail size={14} className="mt-0.5 shrink-0" />
              <span>acelands.vn@gmail.com</span>
            </li>
            <li className="flex items-start gap-2 text-gray-400 text-sm">
              <Facebook size={14} className="mt-0.5 shrink-0" />
              <span>facebook.com</span>
            </li>
            <li className="flex items-start gap-2 text-gray-400 text-sm">
              <Phone size={14} className="mt-0.5 shrink-0" />
              <span>(+84) 567.777.701</span>
            </li>
            <li className="flex items-start gap-2 text-gray-400 text-sm">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>
                02/10 Phố Lưu Quang Vũ - Trung Hoà,
                <br />
                phường Thanh Xuân, TP Hà Nội
              </span>
            </li>
            <li className="flex items-start gap-2 text-gray-400 text-sm">
              <Hash size={14} className="mt-0.5 shrink-0" />
              <span>MSKD: 0111274302</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-start pt-1">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm tracking-[0.12em] uppercase text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div className="w-full overflow-hidden border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d36662.23905616791!2d105.80111300000002!3d21.015957!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5edb9def89%3A0x59824582b36d3e89!2zUC5UcnVuZyBIw7JhICYgUC4gTMawdSBRdWFuZyBWxaksIFRydW5nIEhvw6AsIFnDqm4gSMOyYSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e1!3m2!1sen!2sus!4v1774118988081!5m2!1sen!2sus"
              width="600"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

          <div>
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 border border-white text-white text-xs tracking-[0.15em] uppercase px-5 py-2 hover:bg-white hover:text-[#1a1a1a] transition-colors duration-300"
            >
              Liên Hệ Tư Vấn
              <span className="text-base leading-none">›</span>
            </Link>
          </div>

          <div className="space-y-3 pt-1">
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">VP 1:</span> số 02/10
              Phố Lưu Quang Vũ - Trung Hoà, phường Thanh Xuân, TP Hà Nội
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">VP 2:</span> Tầng 3 toà
              nhà MBLand, ngõ 689 Lạc Long Quân, phường Tây Hồ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
