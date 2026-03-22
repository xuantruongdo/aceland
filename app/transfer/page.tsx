import Banner from "@/components/Banner";
import ConsultationForm from "@/components/ConsultationForm";
import ProjectListing from "@/components/ProjectListing";

const TransferPage = () => {
  return (
    <>
      <Banner image="/images/banner-7.png" title="CĂN HỘ CHUYỂN NHƯỢNG" />
      <ProjectListing filterByStatus={false} title="CĂN HỘ CHUYỂN NHƯỢNG" />
      <ConsultationForm />
    </>
  );
};

export default TransferPage;
