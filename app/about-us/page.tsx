import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import ConsultationForm from "@/components/ConsultationForm";
import VisionMission from "@/components/VisionMission";

export default function About() {
  return (
    <>
      <Banner />
      <AboutUs />
      <VisionMission
        title="Tầm Nhìn"
        image="/images/vision.png"
        overlayPosition="top-left"
        content={[
          {
            type: "paragraph",
            text: "Trở thành tập đoàn phát triển bất động sản cao cấp hàng đầu Việt Nam, kiến tạo những không gian sống tinh hoa, mang tầm vóc quốc tế và giá trị vượt thời gian.",
          },
        ]}
      />
      <VisionMission
        title="Sứ Mệnh"
        image="/images/mission.png"
        overlayPosition="top-right"
        content={[
          {
            type: "list",
            items: [
              "Mang đến chuẩn mực sống đẳng cấp qua những dự án khác biệt về thiết kế, chất lượng và tiện ích.",
              "Tạo dựng cộng đồng tinh hoa với môi trường sống văn minh, an toàn và giàu bản sắc.",
              "Góp phần nâng tầm vị thế đô thị Việt Nam trên bản đồ khu vực và thế giới.",
            ],
          },
        ]}
      />
      <ConsultationForm />
    </>
  );
}
