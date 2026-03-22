"use client";

import { AccordionItem } from "@/types";
import { useState } from "react";
import Accordion from "../ui/AccordionItem";
const FAQS: AccordionItem[] = [
  {
    id: 1,
    title: "Nhà ở xã hội là gì?",
    content: (
      <div className="space-y-4 text-gray-700 text-sm leading-[1.85]">
        <p>
          Khái niệm "Nhà ở xã hội" là gì cũng như những đối tượng nào được tiếp
          cận để thoả mãn nhu cầu về sở hữu một căn nhà đã được quy định chi
          tiết trong Luật Nhà ở 2014. Hãy cùng Ace Land tìm hiểu qua bài viết
          dưới đây!
        </p>
        <p>
          Theo Điều 49, Khoản 7, và Điều 4 Luật nhà ở 2014 quy định như sau:
        </p>
        <p className="font-bold">
          Điều 49. Đối tượng được hưởng chính sách hỗ trợ về nhà ở xã hội:
        </p>
        <p>
          Nhà ở xã hội là nhà ở phải thuộc sở hữu của Nhà nước, được Nhà nước
          trực tiếp quản lý hoặc được giao cho các cơ quan, tổ chức nhà nước
          khác đầu tư, xây dựng bằng nguồn vốn hoặc ngân sách của Nhà nước và
          được sử dụng để bố trí cho đối tượng thuộc diện được hưởng chính sách
          hỗ trợ về nhà ở xã hội theo quy định của pháp luật về nhà ở. Việc đầu
          tư xây dựng nhà ở xã hội phải tuân thủ các quy định của pháp luật về
          đầu tư và xây dựng.
        </p>
        <p className="font-bold">Khoản 7, Điều 4 - Luật nhà ở 2014:</p>
        <p>
          Nhà ở xã hội là nhà ở cho các đối tượng có khó khăn về nhà ở, được đầu
          tư xây dựng bằng nguồn vốn ngoài ngân sách nhà nước để cho thuê hoặc
          cho thuê mua hoặc bán với giá thấp hơn giá thị trường.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "10 nhóm đối tượng được hưởng chính sách về NOXH",
    content: (
      <div className="space-y-3 text-gray-700 text-sm leading-[1.85]">
        <p>
          Theo Điều 49 Luật Nhà ở 2014, 10 nhóm đối tượng được hưởng chính sách
          về nhà ở xã hội bao gồm:
        </p>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>
            Người có công với cách mạng theo quy định của pháp luật về ưu đãi
            người có công với cách mạng.
          </li>
          <li>Hộ gia đình nghèo và cận nghèo tại khu vực nông thôn.</li>
          <li>
            Hộ gia đình tại khu vực nông thôn thuộc vùng thường xuyên bị ảnh
            hưởng bởi thiên tai, biến đổi khí hậu.
          </li>
          <li>Người thu nhập thấp, hộ nghèo, cận nghèo tại khu vực đô thị.</li>
          <li>
            Người lao động đang làm việc tại các doanh nghiệp trong và ngoài khu
            công nghiệp.
          </li>
          <li>
            Sĩ quan, hạ sĩ quan nghiệp vụ, hạ sĩ quan chuyên môn kỹ thuật, quân
            nhân chuyên nghiệp, công nhân trong cơ quan, đơn vị thuộc Công an
            nhân dân và Quân đội nhân dân.
          </li>
          <li>
            Cán bộ, công chức, viên chức theo quy định của pháp luật về cán bộ,
            công chức, viên chức.
          </li>
          <li>Các đối tượng đã trả lại nhà ở công vụ.</li>
          <li>
            Học sinh, sinh viên các học viện, trường đại học, cao đẳng, dạy
            nghề.
          </li>
          <li>
            Hộ gia đình, cá nhân thuộc diện bị thu hồi đất và phải giải tỏa, phá
            dỡ nhà ở theo quy định của pháp luật.
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: 3,
    title: "Điều kiện được mua nhà ở xã hội",
    content: (
      <div className="space-y-3 text-gray-700 text-sm leading-[1.85]">
        <p>
          Để được mua nhà ở xã hội, người mua cần đáp ứng các điều kiện sau:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            Chưa có nhà ở thuộc sở hữu của mình, chưa được mua, thuê hoặc thuê
            mua nhà ở xã hội.
          </li>
          <li>
            Có khó khăn về nhà ở theo quy định: diện tích nhà ở bình quân trong
            hộ gia đình dưới 10m²/người.
          </li>
          <li>
            Có đăng ký hộ khẩu thường trú tại tỉnh, thành phố trực thuộc trung
            ương nơi có nhà ở xã hội.
          </li>
          <li>
            Thuộc đối tượng được hưởng chính sách hỗ trợ về nhà ở xã hội theo
            quy định.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    title: "Hồ sơ đề nghị mua nhà ở xã hội",
    content: (
      <div className="space-y-3 text-gray-700 text-sm leading-[1.85]">
        <p>Hồ sơ đề nghị mua nhà ở xã hội gồm:</p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>Đơn đề nghị mua, thuê, thuê mua nhà ở xã hội (theo mẫu).</li>
          <li>
            Giấy tờ chứng minh đối tượng và điều kiện được hưởng chính sách nhà
            ở xã hội.
          </li>
          <li>Giấy tờ chứng minh về thực trạng nhà ở hiện tại.</li>
          <li>
            Giấy tờ chứng minh về thu nhập (nếu thuộc đối tượng thu nhập thấp).
          </li>
          <li>Bản sao có công chứng CMND/CCCD, hộ khẩu.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    title: "Thủ tục mua nhà ở xã hội mới nhất",
    content: (
      <div className="space-y-3 text-gray-700 text-sm leading-[1.85]">
        <p>Quy trình mua nhà ở xã hội gồm các bước:</p>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>Chuẩn bị hồ sơ đầy đủ theo quy định.</li>
          <li>
            Nộp hồ sơ tại UBND cấp tỉnh hoặc chủ đầu tư dự án nhà ở xã hội.
          </li>
          <li>Cơ quan có thẩm quyền xét duyệt hồ sơ trong vòng 30 ngày.</li>
          <li>Nhận thông báo kết quả xét duyệt.</li>
          <li>Ký hợp đồng mua bán và thanh toán theo tiến độ.</li>
          <li>Nhận bàn giao nhà và làm thủ tục sang tên sổ đỏ.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 6,
    title: "Lãi suất cho vay mua nhà ở xã hội",
    content: (
      <div className="space-y-3 text-gray-700 text-sm leading-[1.85]">
        <p>
          Người mua nhà ở xã hội được vay vốn ưu đãi từ Ngân hàng Chính sách Xã
          hội hoặc các ngân hàng thương mại được Nhà nước chỉ định với lãi suất
          ưu đãi.
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            Lãi suất cho vay tại Ngân hàng Chính sách Xã hội: khoảng 4,8%/năm.
          </li>
          <li>Lãi suất gói hỗ trợ 120.000 tỷ đồng: 7–8%/năm tùy ngân hàng.</li>
          <li>Thời hạn vay tối đa: 25 năm.</li>
          <li>Mức vay tối đa: 80% giá trị căn nhà.</li>
        </ul>
      </div>
    ),
  },
];

export default function SocialHousingFAQ() {
  const [openIds, setOpenIds] = useState<Set<number>>(new Set([1]));

  const toggle = (id: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section className="w-full bg-white py-12">
      {FAQS.map((faq) => (
        <Accordion
          key={faq.id}
          item={faq}
          isOpen={openIds.has(faq.id)}
          onToggle={() => toggle(faq.id)}
        />
      ))}
    </section>
  );
}
