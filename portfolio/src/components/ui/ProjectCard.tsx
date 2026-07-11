import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative gradient-border glass rounded-[1.25rem] overflow-hidden flex flex-col"
    >
      {/* Screenshot placeholder */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-base-800 to-base-900">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
          onError={(e) => {
            // Graceful placeholder if the screenshot hasn't been added yet.
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
          <span className="font-display text-white/10 text-4xl font-bold select-none group-hover:text-white/15 transition-colors">
            {project.title}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-transparent to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-mono uppercase tracking-widest text-aurora-cyan/70 mb-1">
          {project.subtitle}
        </p>
        <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
        <p className="text-sm text-white/55 leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium rounded-full px-4 py-2.5 bg-aurora-gradient hover:shadow-glow transition-shadow"
          >
            <FiGithub size={14} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
