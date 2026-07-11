import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { interests } from "@/data/interests";

export default function Interests() {
  return (
    <section id="interests" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Areas of Interest"
          title="What I care about building"
          description="The problem spaces and technologies I keep coming back to."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, i) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass gradient-border rounded-2xl p-7"
            >
              <span className="inline-flex w-12 h-12 rounded-xl bg-aurora-gradient/20 grid place-items-center text-aurora-cyan mb-5">
                <interest.icon size={22} />
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">{interest.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
