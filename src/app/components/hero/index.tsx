"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroImage from "../../../../public/hero-image.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../Button";
import { MdCollectionsBookmark } from "react-icons/md";

function Hero() {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 bg-gray-700/30 w-[90%] md:w-3/4 h-full text-offwhite px-8 py-10 mt-30 rounded-2xl z-10">
        <div className="main-text-container w-full md:w-2/3">
          <motion.h1
            className="text-3xl lg:text-5xl font-normal mb-4 bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I&apos;m{" "}
            <span className="text-primaryDark font-heading font-semibold">
              Adiba Sadaf
            </span>
          </motion.h1>
          <motion.p
            className="text-base lg:text-xl  mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            A passionate{" "}
            <span className="font-semibold">Software Developer</span> with over
            a year of experience in building and deploying scalable web
            applications. I specialize in crafting dynamic,responsive, and{" "}
            user-friendly interfaces while ensuring seamless data managemen.
            With a keen eye for <span className="font-semibold">design</span>{" "}
            and <span className="font-semibold">performance</span>, I create
            intuitive digital experiences that bring ideas to life.
          </motion.p>
          <div className="flex gap-4 flex-wrap">
            <Button
              text="View My Work"
              href="#projects"
              variant="primary"
              icon={<MdCollectionsBookmark />}
            />
            <Button
              text="GitHub"
              href="https://github.com/Adibasad"
              variant="outline"
              icon={<FaGithub />}
            />
            <Button
              text="LinkedIn"
              href="https://www.linkedin.com/in/adiba-sad-85ba401ba/"
              variant="outline"
              icon={<FaLinkedin className="text-blue-600 text-2xl" />}
            />
          </div>
        </div>

        {/* Polaroid Image */}
        <div className="main-image-container flex items-center justify-center w-full md:w-1/3 px-4 mt-8 md:mt-0">
          <motion.div
            className="relative bg-white shadow-lg transform rotate-2"
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
    </div>
  );
}

export default Hero;
