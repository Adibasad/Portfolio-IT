"use client";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <div className="text-xl font-bold text-white">MyPortfolio</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li className="hover:text-blue-400 transition">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-blue-400 transition">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-blue-400 transition">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-blue-400 transition">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl">☰</button>
      </nav>
    </header>
  );
};

export default Header;
