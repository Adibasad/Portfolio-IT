"use client";
import Hero from "./components/hero";
import Header from "./components/header";
import AboutMe from "./components/aboutme";
import Skills from "./components/Skills";
import Experience from "./components/experience";
import Projects from "./components/projects";
import ContactMe from "./components/contact-me";

function App() {
  return (
    <>
    <div className="">
      <Header/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Projects/>
      <ContactMe/>
    </div>
    
    </>
  );
}

export default App;
