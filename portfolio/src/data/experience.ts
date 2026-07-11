export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  status: "open" | "completed" | "ongoing";
}

export const experience: ExperienceItem[] = [
  {
    title: "Fresher — Open to Work",
    organization: "Looking for Full Stack Developer opportunities",
    period: "2025 — Present",
    description:
      "Actively seeking a Full Stack Developer role where I can apply my skills in Java, Spring Boot and React to build scalable, real-world products.",
    status: "open",
  },
  {
    title: "Full Stack Developer",
    organization: "Self Project",
    period: "2026",
    description:
      "Developed an AI-powered customer support platform featuring live chat, AI assistance, ticket management, admin dashboard, analytics, knowledge base, subscription management, payment integration, and calling support. Gained hands-on experience with Java, Spring Boot, React, MongoDB, REST APIs, WebSocket, JWT Authentication, and full-stack application development.",
    status: "completed",
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  type: "degree" | "certification";
}

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Graphic Era Hill University",
    period: "2022 — 2025",
    type: "degree",
  },
];

export const certifications: EducationItem[] = [];
