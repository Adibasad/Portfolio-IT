"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiCss3, DiHtml5 } from "react-icons/di";
import {
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#007ACC" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38BDF8" },
    { name: "HTML5", icon: <DiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <DiCss3 />, color: "#2965F1" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" }, // Added Next.js
  ];

  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center text-center py-16 px-8 bg-dark text-white"
    >
      <h2 className="text-5xl font-bold mb-10 bg-clip-text text-transparent font-heading text-white">
        Technologies 
      </h2>
      <div className="flex flex-wrap justify-center gap-10 md:gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-24 h-24 flex flex-col justify-center items-center border-2 border-gray-300/40 shadow-4xl rounded-lg p-4 transition-all duration-300 hover:scale-105"
            initial={{ y: 0 }}
            animate={{
              y: [0, 10, 0], // Alternate up-down motion
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="text-5xl shadow-2xl "
              style={{
                color: skill.color,
              }}
            >
              {skill.icon}
            </div>
            <span className="hidden hover:block text-sm text-gray-300 mt-2">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
