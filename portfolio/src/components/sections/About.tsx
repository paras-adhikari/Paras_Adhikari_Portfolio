import { motion } from "framer-motion";
import { FiCode, FiLayers, FiZap } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { siteConfig } from "@/data/social";

const highlights = [
  {
    icon: FiCode,
    title: "Clean Architecture",
    text: "Writing maintainable, well-structured code across the stack.",
  },
  {
    icon: FiLayers,
    title: "Full Stack Range",
    text: "Comfortable in Java/Spring Boot backends and React frontends alike.",
  },
  {
    icon: FiZap,
    title: "Problem Solver",
    text: "Enjoys turning real-world problems into simple, usable products.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title="The developer behind the code"
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              Hi, I'm <span className="text-gradient font-semibold">{siteConfig.name}</span>, a
              passionate Full Stack Developer who enjoys building scalable web
              applications using Java, Spring Boot, React, Node.js, Express
              and MongoDB.
            </p>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              I enjoy solving real-world problems and creating clean,
              responsive and user-friendly web applications — from designing
              robust APIs to crafting delightful interfaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 grid gap-4"
          >
            {highlights.map((item, i) => (
              <GlassCard key={item.title} className="p-5 flex items-start gap-4" custom={i}>
                <span className="shrink-0 w-11 h-11 grid place-items-center rounded-xl bg-aurora-gradient/20 text-aurora-cyan">
                  <item.icon size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{item.text}</p>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
