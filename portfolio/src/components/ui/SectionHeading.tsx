import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mb-16 ${align === "center" ? "text-center mx-auto" : "text-left"} max-w-2xl`}
    >
      <span className="inline-block text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-aurora-cyan/80 mb-4">
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-white/60 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
