import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies I work with"
          description="A snapshot of the languages, frameworks and tools I use to design, build and ship full stack applications."
        />

        <div className="space-y-14">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title}>
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-mono uppercase tracking-[0.25em] text-white/40 mb-6"
              >
                {String(catIndex + 1).padStart(2, "0")} — {category.title}
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    whileHover={{ y: -6, scale: 1.04 }}
                    className="group relative glass rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default overflow-hidden"
                  >
                    <div
                      className="absolute -inset-6 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle, ${skill.color}33, transparent 70%)` }}
                    />
                    <skill.icon
                      size={30}
                      className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    <span className="relative z-10 text-xs sm:text-sm font-medium text-white/80 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
