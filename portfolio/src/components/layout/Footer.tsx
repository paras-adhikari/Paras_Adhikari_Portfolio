import { FiHeart } from "react-icons/fi";
import { socialLinks, siteConfig } from "@/data/social";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 mt-10">
      <div className="section-container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-white/50 flex items-center gap-1.5 text-center sm:text-left">
          Made with <FiHeart className="text-aurora-purple animate-pulse-glow" /> by{" "}
          <span className="text-white/80 font-medium">{siteConfig.name}</span>
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="w-10 h-10 grid place-items-center rounded-full glass hover:text-aurora-cyan hover:border-aurora-cyan/40 transition-colors"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-xs text-white/30">© {year} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
