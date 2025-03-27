"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../../../public/kitty-logo.ico";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg"
          : "bg-transparent"
      } backdrop-blur-lg border-b border-white/10`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex flex-row items-center justify-center text-3xl font-bold text-white font-dancing">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="mr-1"
          />
          Full<span className="text-golden">Stack</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li className="hover:text-blue-400 transition">
            <a href="/resume.pdf" download="Adiba_Sadaf_FullStack_Resume.pdf">
              Download Resume
            </a>
          </li>
          <li className="hover:text-blue-400 transition">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-blue-400 transition">
            <a href="#contact">Let's Connect</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-2/3 h-full bg-gray-900 text-white shadow-lg z-50 flex flex-col items-center p-6"
          >
            {/* Close Button */}
            <button
              className="self-end text-3xl text-white mb-6"
              onClick={() => setMenuOpen(false)}
            >
              ✖
            </button>

            {/* Mobile Navigation Links */}
            <ul className="flex flex-col space-y-6 text-lg">
              <li className="hover:text-blue-400 transition">
                <a
                  href="/resume.pdf"
                  download="Adiba_Sadaf_FullStack_Resume.pdf"
                >
                  Download Resume
                </a>
              </li>

              <li className="hover:text-blue-400 transition">
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li className="hover:text-blue-400 transition">
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Let's Connect
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
