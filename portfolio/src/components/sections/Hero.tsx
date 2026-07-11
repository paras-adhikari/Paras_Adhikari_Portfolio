import { motion } from "framer-motion";
import { FiDownload, FiArrowRight, FiSend } from "react-icons/fi";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { socialLinks, siteConfig } from "@/data/social";

const ROLES = [
  "Java Developer",
  "Spring Boot Developer",
  "Backend Developer",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Hero() {
  const typedRole = useTypingEffect({ words: ROLES });

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center lg:items-start pt-32 pb-20 lg:pt-36 lg:pb-20 overflow-hidden"
    >
      {/* Contained portrait, right side (desktop) — smaller, but blended into the background, not boxed */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hidden lg:block absolute right-6 xl:right-10 top-28 bottom-10 w-[36%] xl:w-[32%]"
      >
        <div className="relative w-full h-full">
          {/* Soft radial glow behind the subject */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[90%] h-[90%] rounded-full bg-aurora-purple/25 blur-[120px]" />
          </div>
          <img
            src="/profile.jpg"
            alt="Paras Adhikari"
            className="absolute inset-0 w-full h-full object-cover object-top"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Smooth radial vignette — fades edges into the background without a hard box outline */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(85% 80% at 55% 40%, transparent 40%, rgba(5,5,16,0.55) 78%, rgba(5,5,16,0.95) 100%)",
            }}
          />
          {/* Gentle grounding fade at the bottom into the content below */}
          <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-transparent to-transparent opacity-70" />
        </div>
      </motion.div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 sm:px-10 lg:pl-12 xl:pl-16 lg:pr-12">
        {/* Copy — hugs the left edge on desktop, never overlaps the portrait */}
        <div className="text-center lg:text-left max-w-2xl lg:max-w-lg">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[11px] sm:text-xs font-mono tracking-wide text-aurora-cyan mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-aurora-cyan animate-pulse" />
            Available for new opportunities
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-4xl font-bold leading-[1.2] mb-3"
          >
            Hi, I'm
            <br />
            <span className="text-gradient">{siteConfig.name}</span>
          </motion.h1>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg lg:text-xl font-display text-white/80 mb-2 min-h-[1.5rem]"
          >
            <span>{siteConfig.role}</span>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-mono text-xs sm:text-sm text-aurora-purple mb-5 min-h-[1.25rem]"
          >
            <span className="typing-cursor">{typedRole}</span>
          </motion.div>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-white/60 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            I design and build scalable, production-ready web applications —
            from robust Spring Boot APIs to polished React interfaces.
          </motion.p>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
          >
            <a href={siteConfig.resumeUrl} download className="btn-primary !px-6 !py-3 !text-sm">
              <FiDownload size={15} />
              Download Resume
            </a>
            <button onClick={() => scrollTo("projects")} className="btn-outline !px-6 !py-3 !text-sm">
              View Projects
              <FiArrowRight size={15} />
            </button>
            <button onClick={() => scrollTo("contact")} className="btn-outline !px-6 !py-3 !text-sm">
              <FiSend size={15} />
              Hire Me
            </button>
          </motion.div>

          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center lg:justify-start gap-3"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-9 h-9 grid place-items-center rounded-full text-white/70 hover:text-aurora-cyan hover:-translate-y-1 transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Mobile / tablet: framed photo below the copy instead of full-bleed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:hidden mt-12 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2rem] glass-strong gradient-border overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Paras Adhikari"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
