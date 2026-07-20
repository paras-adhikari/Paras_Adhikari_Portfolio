export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  liveDemo: string;
  github: string;
  featured?: boolean;
}

// TODO: Replace placeholder links (#) with your real GitHub repo and live demo URLs.
export const projects: Project[] = [
  {
    id: "ai-chat-support",
    title: "AI Chat Support System",
    subtitle: "Full Stack SaaS Support Platform",
    description:
      "An end-to-end customer support platform with an AI chatbot, agent and admin dashboards, live chat, ticketing, subscription plans and analytics.",
    image: "/projects/ai-chat-support.png",
    tags: [
      "AI Chatbot",
      "Admin Dashboard",
      "Agent Dashboard",
      "Live Chat",
      "Ticket Management",
      "Subscription Plans",
      "Analytics",
      "MongoDB",
    ],
    liveDemo: "#",
    github: "https://github.com/paras-adhikari/Ai-chat-support-system",
    featured: true,
  },
  {
    id: "code-combat",
    title: "Code Combat",
    subtitle: "Real-time Coding Battle Platform",
    description:
      "A real-time multiplayer coding battle arena where developers compete to solve problems fastest, with live code execution and a global leaderboard.",
    image: "/projects/code-combat.png",
    tags: [
      "Socket.IO",
      "Live Multiplayer",
      "Real-time Code Execution",
      "Leaderboard",
      "Responsive UI",
    ],
    liveDemo: "#",
    github: "https://github.com/paras-adhikari/Code-Combat",
    featured: true,
  },
];
