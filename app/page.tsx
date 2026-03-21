import CommercialProjects from "@/components/CommercialProjects";
import ConsultationForm from "@/components/ConsultationForm";
import HeroBanner from "@/components/HeroBanner";
import Partners from "@/components/Partners";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Stories />
      <CommercialProjects />
      <Partners />
      <ConsultationForm />
    </>
  );
}
