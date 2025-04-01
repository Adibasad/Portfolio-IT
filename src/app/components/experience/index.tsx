"use client";
import { motion } from "framer-motion";
import { FaBuilding } from "react-icons/fa";  // Using FaBuilding for the icon
import experiences from "../../constants/experience.json";

function ExperienceCard({
  title,
  company,
  duration,
  description,
  skills,
}: {
  title: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
}) {
  return (
    <motion.div
      className="shadow-lg bg-gray-500/30 rounded-4xl p-6 space-y-4 transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-2 hover:scale-105 max-w-3xl relative overflow-hidden "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4">
        <FaBuilding className="text-golden text-5xl transform transition-all duration-300 hover:rotate-6" />
        <div>
          <h3 className="text-lg lg:text-2xl font-bold text-white">{title}</h3>
          <p className="text-md font-semibold text-gray-200">{company}</p>
          <p className="text-xs lg:text-sm text-gray-400">{duration}</p>
        </div>
      </div>

      <p className="text-gray-200 text-sm  lg:text-lg">{description}</p>

      {/* Skills Learned */}
      <div className="flex flex-wrap gap-4 mt-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-primary text-white py-1 px-4 rounded-lg text-sm shadow-md hover:bg-primaryLight transition-all duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <>
    <section id="experience" className="w-full py-20 text-white flex flex-col items-center bg-dark">
      <div className="container mx-auto px-8">
        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-center mb-10 text-transparent font-heading text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Experience
        </motion.h2>
        <div className="flex flex-col  gap-8 items-center">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              company={experience.company}
              duration={experience.duration}
              description={experience.description}
              skills={experience.skills}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
