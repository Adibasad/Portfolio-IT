"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const [scrolled, setScrolled] = useState(false); // Track scroll position

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Update scrolled state after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="aboutMe"
      className={`w-full flex flex-col items-center text-left  ${
        scrolled ? "pt-16" : "pt-48"
      } pb-16 px-8 lg:px-4 bg-dark text-white relative transition-all duration-500`}
    >

      {/* About Me Content */}
      <motion.h2
        className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent font-heading text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About <span className="font-normal text-golden">Me</span>
      </motion.h2>
      <motion.p
        className="max-w-5xl text-lg text-gray-300 leading-relaxed "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I'm have a passion for creating innovative and efficient solutions. With
        over a year of hands-on experience, I've had the opportunity to build a
        range of dynamic applications, tackling challenges across various
        industries such as finance, entertainment, and more. My expertise lies
        in building robust, responsive, scalable, and user-friendly web
        applications.
      </motion.p>
      <motion.p
        className="max-w-5xl text-lg text-gray-300 mt-4 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        I've had the privilege to contribute to several impactful projects such
        as
        <span className="font-semibold text-primary"> MudraBoxx</span> (a
        Digital Lending Platform),{" "}
        <span className="font-semibold text-primary">PaisaInTime</span> (Digital
        Lending Platform), and created personal projects like a{" "}
        <span className="font-semibold text-primary"> Netflix Clone</span> , and
        a{" "}
        <span className="font-semibold text-primary">
          Movie Recommender System
        </span>
        . I specialize in using cutting-edge technologies like{" "}
        <span className="font-semibold">Next.js</span>,{" "}
        <span className="font-semibold">TypeScript</span>,{" "}
        <span className="font-semibold">React.js</span>,{" "}
        <span className="font-semibold">PostgreSQL</span>, and{" "}
        <span className="font-semibold">MongoDB</span> to create seamless user
        experiences and scalable backend systems. I thrive on building
        applications that not only meet user expectations but exceed them in
        performance and functionality.
      </motion.p>

      <motion.p
        className="max-w-5xl text-lg text-gray-300 mt-4 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        In addition to technical skills, I also place great importance on
        teamwork and communication. I believe that collaboration drives
        innovation and allows for better problem-solving. Throughout my career,
        I've worked in cross-functional teams and have always maintained a focus
        on delivering high-quality solutions.
      </motion.p>

      <motion.div
        className="mt-8 px-6 py-4 bg-gray-800 rounded-lg border-l-4 border-secondary text-gray-300 italic"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Fun fact: When I'm not coding, you’ll find me diving into my favorite
        books📖, enjoying a great movie🎬, or experimenting with new recipes in the
        kitchen🍳! 
      </motion.div>
    </section>
  );
}
