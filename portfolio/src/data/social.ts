import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { IconType } from "react-icons";

export interface SocialLink {
  name: string;
  icon: IconType;
  url: string;
}

// Email icon links straight to your inbox via mailto.
export const socialLinks: SocialLink[] = [
  { name: "GitHub", icon: FiGithub, url: "https://github.com/paras-adhikari" },
  { name: "LinkedIn", icon: FiLinkedin, url: "https://www.linkedin.com/in/paras-adhikari-6b6356307/" },
  { name: "Email", icon: FiMail, url: "mailto:adhikariparas60@gmail.com" },
];

export const siteConfig = {
  name: "Paras Adhikari",
  role: "Full Stack Developer",
  // TODO: Replace with the real path to your resume PDF (place file in /public).
  resumeUrl: "/resume.pdf",
  githubUsername: "paras-adhikari",
};
