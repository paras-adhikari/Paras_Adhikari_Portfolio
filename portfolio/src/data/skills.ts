import {
  SiJavascript,
  SiPython,
  SiC,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiSpringboot,
  SiSpringsecurity,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiPostman,
  SiIntellijidea,
  SiJsonwebtokens,
  SiStripe,
  SiClaude,
} from "react-icons/si";
import { FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbBrandOpenai } from "react-icons/tb";
import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "C", icon: SiC, color: "#a8b9cc" },
      { name: "HTML", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS", icon: FaCss3Alt, color: "#264de4" },
      { name: "SQL", icon: SiMysql, color: "#4479a1" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
      { name: "Spring Security", icon: SiSpringsecurity, color: "#6db33f" },
      { name: "Node.js", icon: SiNodedotjs, color: "#68a063" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
    ],
  },
  {
    title: "AI & Integrations",
    skills: [
      { name: "Claude API", icon: SiClaude, color: "#d97757" },
      { name: "OpenAI API", icon: TbBrandOpenai, color: "#ffffff" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "#000000" },
      { name: "Stripe", icon: SiStripe, color: "#635bff" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "VS Code", icon: VscVscode, color: "#007acc" },
      { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "#fe315d" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
    ],
  },
];
