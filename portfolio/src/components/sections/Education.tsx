import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, certifications } from "@/data/experience";

export default function Education() {
  const items = [
    ...education.map((e) => ({ ...e, icon: FiBookOpen, kind: "Education" })),
    ...certifications.map((c) => ({ ...c, icon: FiAward, kind: "Certification" })),
  ];

  return (
    <section id="education" className="section-padding relative">
      <div className="section-container">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6 justify-items-center">
          {items.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`glass gradient-border rounded-2xl p-7 w-full ${
                items.length === 1 ? "sm:col-span-2 sm:max-w-sm" : ""
              }`}
            >
              <span className="inline-flex w-12 h-12 rounded-xl bg-aurora-gradient/20 grid place-items-center text-aurora-purple mb-5">
                <item.icon size={22} />
              </span>
              <p className="text-xs font-mono uppercase tracking-widest text-aurora-cyan/70 mb-2">
                {item.kind}
              </p>
              <h3 className="text-lg font-semibold text-white mb-1.5">{item.degree}</h3>
              <p className="text-white/60 text-sm mb-1">{item.institution}</p>
              <p className="text-white/40 text-sm font-mono">{item.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
