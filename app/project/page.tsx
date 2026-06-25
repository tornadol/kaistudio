import Link from "next/link";
import { projects } from "@/data/projects";
import PageLayout from "@/components/PageLayout";

export default function ProjectList() {
  return (
    <PageLayout>
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div className="project" key={project.id}>
                <Link href={`/project/${project.slug}`}>
                  <div className="image-wrapper">
                    <img src={project.image.url} alt={project.name} />
                    <div className="caption">
                      <div className="caption-text">
                        <h4 className="text-white text-base md:text-xl px-4 py-2">
                          {project.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
