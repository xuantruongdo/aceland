import Banner from "@/components/Banner";
import ConsultationForm from "@/components/ConsultationForm";
import ProjectListing from "@/components/ProjectListing";

const ProjectsPage = () => {
  return (
    <>
      <Banner image="/images/banner-6.jpg" title="DỰ ÁN THƯƠNG MẠI" />
      <ProjectListing filter={false} backgroundClass="bg-[#333333]"/>
      <ConsultationForm />
    </>
  );
};

export default ProjectsPage;
