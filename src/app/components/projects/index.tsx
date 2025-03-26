"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import projects from "../../constants/projects";
import Image from "next/image";
import { StaticImageData} from "next/dist/shared/lib/get-img-props";
import { useState } from "react";

type Project = {
  title: string;
    description: string;
    image: StaticImageData;
  techStack: string[];
    liveDemo?: string;
};

function ProjectCard({ title, description, image, techStack, liveDemo }: Project) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-lg group max-w-lg max-h-96"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onClick={() => setIsOpen(!isOpen)} // Toggle on click (for mobile)
    >
      {/* Project Image */}
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
      />

      {/* Click Overlay (for mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute md:hidden inset-0 bg-transparent bg-opacity-50 flex items-end"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <div className="absolute bottom-0 w-full h-full bg-gradient-to-b from-transparent via-gray-800 to-black"></div>
            <motion.div className="bg-gray-700/30 bg-opacity-90 text-white px-4 py-2 w-full rounded-b-2xl transform transition-transform duration-500">
              <h3 className="text-base font-bold">{title}</h3>
              <p className="text-gray-300 text-xs mt-1">{description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-3">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primaryDark text-white text-xs py-1 px-2 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live Demo Button */}
              {liveDemo && (
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition-all duration-300 flex items-center gap-2 mt-1"
                >
                  <FaExternalLinkAlt className="text-sm " /> Live Demo
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay Content (Hidden by Default, Appears on Hover) */}
      <div className="absolute hidden md:flex inset-0 bg-transparent bg-opacity-50 items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Gradient Fade Effect */}
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-b from-transparent via-gray-800 to-black"></div>
        <motion.div className="bg-gray-700/30 bg-opacity-90 text-white px-4 py-2 lg:p-6 w-full rounded-b-2xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-sm lg:text-xl font-bold">{title}</h3>
          <p className="text-gray-300 text-xs lg:text-sm mt-1">{description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-3">
            {techStack.map((tech: string, index: number) => (
              <span
                key={index}
                className="bg-primaryDark text-white text-xs py-1 px-2 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Live Demo Button */}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-all duration-300 flex items-center gap-2 mt-2 lg:mt-4"
            >
              <FaExternalLinkAlt className="text-xs lg:text-lg" /> Live Demo
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 md:px-14 text-white flex flex-col items-center justify-center bg-dark"
    >
      <div className="container mx-auto px-8">
        <motion.h2
          className="text-4xl lg:text-5xl font-heading font-bold text-center mb-10 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Live Projects
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-10 justify-center items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              liveDemo={project.liveDemo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
