"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../../../public/kitty-logo.ico";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-4 py-4 transition-all duration-300 ${
        scrolled ? "shadow-lg bg-gray-900" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto ">
        {/* Logo */}
        <div className="flex flex-row items-center text-xl lg:text-3xl font-bold text-white font-dancing">
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
          <GiHamburgerMenu className="text-primaryDark" />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ right: "-100%" }}
            animate={{ right: "0%" }}
            exit={{ right: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-[60%] max-w-sm bg-gray-900 min-h-screen text-white shadow-lg flex flex-col items-center p-6"
          >
            {/* Close Button */}
            <button
              className="self-end text-2xl text-white mb-6"
              onClick={() => setMenuOpen(false)}
            >
              <RxCross1 />
            </button>

            {/* Mobile Navigation Links */}
            <ul className="flex flex-col space-y-6 text-sm">
              <li className="hover:text-blue-400 transition">
                <a
                  href="/resume.pdf"
                  download="Adiba_Sadaf_FullStack_Resume.pdf"
                >
                  📄 Download Resume
                </a>
              </li>
              <li className="hover:text-blue-400 transition">
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                  🚀 Projects
                </a>
              </li>
              <li className="hover:text-blue-400 transition">
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  🤝 Let's Connect
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
