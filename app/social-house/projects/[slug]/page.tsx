import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/libs/utils";
import Banner from "@/components/Banner";
import ProjectFAQ from "@/components/ProjectFAQProps";

interface SocialHouseDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SocialHouseDetailPage({
  params,
}: SocialHouseDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Banner image={project.image} title={project.name} />
      <ProjectFAQ project={project} />
    </>
  );
}
