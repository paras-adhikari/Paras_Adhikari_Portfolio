import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container">
        <SectionHeading eyebrow="Experience" title="Where I'm at" />

        <div className="max-w-3xl mx-auto space-y-8">
          {experience.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative glass gradient-border rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start"
            >
              <span className="shrink-0 w-14 h-14 rounded-2xl bg-aurora-gradient/20 grid place-items-center text-aurora-cyan">
                <FiBriefcase size={24} />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-aurora-cyan/10 text-aurora-cyan border border-aurora-cyan/30">
                    {item.status === "open" ? "Open to Work" : item.status === "completed" ? "Completed" : "Ongoing"}
                  </span>
                </div>
                <p className="text-sm font-mono text-white/40 mb-3">{item.period}</p>
                <p className="text-white/60 leading-relaxed mb-2">{item.organization}</p>
                <p className="text-white/50 leading-relaxed text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
