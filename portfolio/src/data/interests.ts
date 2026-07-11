import { FiServer, FiCpu, FiLayers, FiGlobe, FiGitBranch } from "react-icons/fi";
import type { IconType } from "react-icons";

export interface Interest {
  title: string;
  description: string;
  icon: IconType;
}

// Sourced from the resume's "Areas of Interest" section.
export const interests: Interest[] = [
  {
    title: "Backend Engineering",
    description: "Designing robust, scalable server-side systems and APIs.",
    icon: FiServer,
  },
  {
    title: "AI-Integrated Systems",
    description: "Building intelligent features powered by LLMs like Claude and OpenAI.",
    icon: FiCpu,
  },
  {
    title: "Enterprise Application Architecture",
    description: "Structuring production-grade applications for scale and maintainability.",
    icon: FiLayers,
  },
  {
    title: "Real-Time Web Technologies",
    description: "Low-latency, bidirectional experiences with WebSocket and Socket.IO.",
    icon: FiGlobe,
  },
  {
    title: "Open Source Development",
    description: "Contributing to and building in the open with the developer community.",
    icon: FiGitBranch,
  },
];
