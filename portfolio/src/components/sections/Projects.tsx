import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few projects that showcase how I approach building full stack, production-grade applications."
        />

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
