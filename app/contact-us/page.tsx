import Banner from "@/components/Banner";
import ConsultationForm from "@/components/ConsultationForm";
import InfoOverlay, { BlockType, ContactIcon, OverlayPosition } from "@/components/InfoOverlay";

const ContactUsPage = () => {
  return (
    <>
      <Banner image="/images/banner-9.png" title="LIÊN HỆ" />
      <ConsultationForm />
      <InfoOverlay
        title="Thông Tin Liên Hệ"
        image="/images/contact-us.png"
        overlayPosition={OverlayPosition.Center}
        content={[
          {
            type: BlockType.Contact,
            rows: [
              {
                label: "Hotline",
                items: [{ icon: ContactIcon.Phone, text: "(+84) 567.777.701" }],
              },
              {
                label: "Địa chỉ văn phòng tư vấn",
                items: [
                  {
                    icon: ContactIcon.Map,
                    text: "VP 1: số 02/10 Phố Lưu Quang Vũ, phường Yên Hòa, TP Hà Nội",
                  },
                  {
                    icon: ContactIcon.Map,
                    text: "VP 2: Tầng 3 toà nhà MBLand, ngõ 689 Lạc Long Quân, phường Phú Thượng, TP Hà Nội",
                  },
                ],
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default ContactUsPage;
