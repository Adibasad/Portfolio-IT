"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { DiCss3, DiHtml5 } from "react-icons/di";
import {
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import Image from "next/image";
import Python from "../../../../public/python.ico";
import Java from "../../../../public/java.ico";

export default function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-5xl" />, color: "#61DAFB" },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-5xl" />,
      color: "#ffffff",
    },
    {
      name: "Python",
      icon: <Image src={Python} alt="Python" className="w-16 h-16 p-1" />,
      color: "#3776AB",
    },
    {
      name: "Java",
      icon: <Image src={Java} alt="Java" className="w-16 h-16 p-1" />,
      color: "#007396",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-5xl" />,
      color: "#007ACC",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-5xl" />,
      color: "#68A063",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-5xl" />,
      color: "#336791",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-5xl" />,
      color: "#47A248",
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-5xl" />,
      color: "#38BDF8",
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript className="text-5xl rounded-2xl" />,
      color: "#ffff00",
    },
    { name: "HTML5", icon: <DiHtml5 className="text-5xl" />, color: "#E34F26" },
    { name: "Git", icon: <FaGitAlt className="text-5xl" />, color: "#f0522e" },
    { name: "CSS3", icon: <DiCss3 className="text-5xl" />, color: "#2965F1" },
  ];

  const [flipped, setFlipped] = useState(Array(skills.length).fill(false));

  const handleFlip = (index: number) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center text-center py-16 px-8 lg:px-16 bg-dark text-white"
    >
      <h2 className="text-3xl lg:text-5xl font-bold mb-10 bg-clip-text text-transparent font-heading text-white">
        Technologies
      </h2>
      <div className="flex flex-wrap justify-center gap-10 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-24 h-24 perspective-1000"
            onClick={() => handleFlip(index)}
            animate={{
              y: ["0", "-15px", "0"], // Moves up and down
              transition: {
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
              },
            }}
          >
            <motion.div
              className="relative w-full h-full border-2 border-gray-300/40 shadow-4xl rounded-lg transition-all duration-300 cursor-pointer"
              initial={false}
              animate={{ rotateY: flipped[index] ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side */}
              <div
                className="absolute inset-0 flex justify-center items-center rounded-lg"
                style={{ color: skill.color, backfaceVisibility: "hidden" }}
              >
                {skill.icon}
              </div>

              {/* Back Side */}
              <div
                className="absolute inset-0 flex justify-center items-center bg-gray-800 text-white text-sm  font-heading font-semibold rounded-lg"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                {skill.name}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-8 px-6 py-4 bg-gray-800 rounded-lg border-l-4 border-secondary text-gray-300 italic"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Need a developer who can turn ideas into real, scalable web apps? I'm
        open for freelance or full-time opportunities — let's build something
        amazing together!
      </motion.div>
    </section>
  );
}
