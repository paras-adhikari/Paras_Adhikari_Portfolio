import { useEffect, useState } from "react";
import LoadingScreen from "@/components/layout/LoadingScreen";
import AnimatedBackground from "@/components/layout/AnimatedBackground";
import CursorGlow from "@/components/layout/CursorGlow";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Interests from "@/components/sections/Interests";
import GithubStats from "@/components/sections/GithubStats";
import Contact from "@/components/sections/Contact";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <AnimatedBackground />
      <CursorGlow />
      <ScrollProgressBar />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Interests />
        <GithubStats />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
