import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

const WORDS = ["Welcome", "to", "my", "digital", "space"];

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-base-950 overflow-hidden"
        >
          {/* Ambient aurora glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-aurora-radial blur-3xl animate-pulse-glow" />
            <div className="absolute top-[20%] left-[15%] w-72 h-72 rounded-full bg-aurora-blue/20 blur-[100px] animate-blob" />
            <div className="absolute bottom-[15%] right-[15%] w-72 h-72 rounded-full bg-aurora-cyan/20 blur-[100px] animate-blob" style={{ animationDelay: "3s" }} />
          </motion.div>

          {/* Grid texture */}
          <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-40" />

          <div className="relative flex flex-col items-center gap-8 px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm font-mono tracking-widest text-aurora-cyan/90 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-aurora-cyan animate-pulse" />
              Paras Adhikari
            </motion.div>

            <h1 className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-3xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-3xl">
              {WORDS.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                  className={
                    word === "digital" || word === "space"
                      ? "text-gradient"
                      : "text-white"
                  }
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
              className="h-px w-40 sm:w-56 bg-gradient-to-r from-transparent via-aurora-purple/70 to-transparent"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="flex items-center gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 rounded-full bg-aurora-gradient"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
