import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";
import clsx from "@/lib/clsx";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  ...rest
}: GlassCardProps) {
  return (
    <motion.div
      className={clsx(
        "glass rounded-2xl relative overflow-hidden",
        hover && "transition-all duration-500 hover:border-white/25 hover:shadow-glow hover:-translate-y-1",
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
