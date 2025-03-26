"use client";
import Image from "next/image";
import Hero from "./components/hero";
import Header from "./components/header";
import AboutMe from "./components/aboutme";
import Skills from "./components/Skills";
import Experience from "./components/experience";
import Projects from "./components/projects";

function App() {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <Header/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Projects/>
    </div>
    
    </>
  );
}

export default App;
