"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroImage from "../../../../public/hero-image.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

<motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-medium hover:bg-blue-600"
          >
            View My Work
          </a>
          <a
            href="https://github.com/Adibasad"
            target="_blank"
            className="px-6 py-3 border border-white text-white rounded-lg text-lg font-medium hover:bg-white hover:text-black"
          >
            <FaGithub className="inline-block mr-2" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/adiba-sadaf/"
            target="_blank"
            className="px-6 py-3 border border-white text-white rounded-lg text-lg font-medium hover:bg-white hover:text-black"
          >
            <FaLinkedin className="inline-block mr-2" />
            LinkedIn
          </a>
        </motion.div>

function Hero() {
  return (
    <div className="flex flex-row items-center justify-center gap-16 bg-gray-700/30 w-3/4 h-full text-offwhite px-8 py-10 mt-30 rounded-2xl">
      <div className="main-text-container w-2/3">
        <motion.h1
          className="text-5xl font-bold mb-4 bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Adiba <span className="text-primaryDark">Sadaf</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          a passionate <span className="font-bold">Software Developer</span>{" "}
          with 1 year of experience in building and deploying{" "}
          <span className="font-bold">scalable web applications</span>. I
          specialize in crafting <span className="font-bold">dynamic</span>,{" "}
          <span className="font-bold">responsive</span>, and{" "}
          <span className="font-bold">user-friendly interfaces</span> while
          ensuring seamless <span className="font-bold">data management</span>.
          With a keen eye for <span className="font-bold">design</span> and{" "}
          <span className="font-bold">performance</span>, I create intuitive{" "}
          <span className="font-bold">digital experiences</span> that bring
          ideas to life.
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-medium hover:bg-blue-600"
          >
            View My Work
          </a>
          <a
            href="https://github.com/Adibasad"
            target="_blank"
            className="px-6 py-3 border border-white text-white rounded-lg text-lg font-medium hover:bg-white hover:text-black"
          >
            <FaGithub className="inline-block mr-2" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/adiba-sadaf/"
            target="_blank"
            className="px-6 py-3 border border-white text-white rounded-lg text-lg font-medium hover:bg-white hover:text-black"
          >
            <FaLinkedin className="inline-block mr-2" />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Polaroid Image */}
      <div className="main-image-container flex items-center justify-center w-1/3 px-4">
        <motion.div
          className="relative bg-white shadow-lg  transform rotate-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={HeroImage}
            alt="Adiba Sadaf"
            width={220}
            height={220}
            className="rounded-xl px-4 py-4"
          />
          {/* Polaroid Bottom Space */}
          <div className="absolute bottom-0 w-full h-12 bg-white text-center text-xl flex items-center justify-center font-medium font-dancing text-gray-500">
            Adiba Sadaf 🌻
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
