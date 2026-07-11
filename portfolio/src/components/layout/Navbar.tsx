import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { useActiveSection } from "@/hooks/useActiveSection";
import { siteConfig } from "@/data/social";
import clsx from "@/lib/clsx";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
];

const CONTACT_LINK = { label: "Contact", id: "contact" };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const activeId = useActiveSection([...NAV_LINKS.map((l) => l.id), CONTACT_LINK.id]);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);

      if (mobileOpen) {
        setHidden(false);
      } else if (currentY > lastScrollY.current && currentY > 120) {
        setHidden(true); // scrolling down — hide
      } else {
        setHidden(false); // scrolling up — reveal
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <nav
        className={clsx(
          "section-container flex items-center justify-between rounded-2xl transition-all duration-500 px-4 sm:px-6",
          scrolled ? "glass-strong py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "py-3"
        )}
      >
        {/* Spacer to balance the row now that there's no logo */}
        <div className="hidden lg:block w-28" />

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={clsx(
                  "px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-300",
                  activeId === link.id
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side — Contact CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick(CONTACT_LINK.id)}
            className="hidden lg:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white bg-aurora-gradient bg-[length:200%_200%] hover:bg-right shadow-glow-blue transition-all duration-500"
          >
            {CONTACT_LINK.label}
          </button>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-10 h-10 grid place-items-center rounded-xl glass"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden section-container mt-2 overflow-hidden"
          >
            <div className="glass-strong rounded-2xl p-4 flex flex-col gap-1">
              {[...NAV_LINKS, CONTACT_LINK].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={clsx(
                    "text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    activeId === link.id
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={siteConfig.resumeUrl}
                download
                className="mt-2 btn-primary w-full"
              >
                <FiDownload size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
