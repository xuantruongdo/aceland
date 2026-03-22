import Banner from "@/components/Banner";
import ConsultationForm from "@/components/ConsultationForm";
import ProjectListing from "@/components/ProjectListing";

export default function ProjectsPage() {
  return (
    <>
      <Banner
        image="/images/banner-1.jpg"
        title="DỰ ÁN NHÀ Ở XÃ HỘI"
        position="right"
      />
      <ProjectListing />
      <ConsultationForm />
    </>
  );
}
