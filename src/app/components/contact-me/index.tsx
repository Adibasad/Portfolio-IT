"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import contactImg from "../../../../public/kitty.png";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <section
      id="contact"
      className="w-full py-20 px-8 md:px-14 flex items-center justify-center bg-dark text-white"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center justify-center">
        {/* Left: Image & Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold">Let's Work Together!</h2>
          <p className="text-gray-300">
            Have a project in mind? Feel free to reach out and let's build
            something amazing.
          </p>
          <Image
            src={contactImg}
            alt="Contact"
            width={200}
            height={100}
            className="mx-auto md:mx-0"
          />
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary h-32"
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md text-lg font-semibold hover:bg-primaryDark transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
