import { projects } from "@/data/projects";
import ProjectGallery from "./ProjectGallery";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <p>Project not found.</p>
      </div>
    );
  }

  return <ProjectGallery project={project} />;
}
