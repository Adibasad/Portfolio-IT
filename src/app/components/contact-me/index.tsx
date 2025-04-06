"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import contactImg from "../../../../public/email-write.png";
import successImg from "../../../../public/success.png";
import { HiMiniCheckBadge } from "react-icons/hi2";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ success: false, message: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL!,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (response.status === 200) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
        setShowSuccess(true);

        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        setStatus({ success: false, message: "Failed to send message!" });
      }
    } catch (error) {
      setStatus({ success: false, message: "Error sending email!" });
      console.error("EmailJS error:", error);
    }
  };

  return (
    <>
      {showSuccess ? (
        <>
          <div className="flex items-center justify-center mb-10 py-10 px-8 md:px-14">
            <SuccessMessage />
          </div>
        </>
      ) : (
        <section
          id="contact"
          className="w-full mb-10 py-10 px-8 md:px-14 flex items-center justify-center bg-dark text-white overflow-x-hidden"
        >
          <div className="container mx-auto grid md:grid-cols-2 gap-8">
            {/* Left: Image & Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center md:text-left flex flex-col items-start justify-center"
            >
              <h2 className="text-4xl font-bold">Contact Me</h2>
              <p className="text-gray-300">
                Got a project in mind or just want to say hi? Feel free to drop
                a message — I&apos;m always open to exciting opportunities and
                meaningful collaborations!
              </p>
              <div className="w-full flex justify-center items-center">
                <Image
                  src={contactImg}
                  alt="Contact"
                  width={200}
                  height={100}
                  className="mx-auto md:mx-0"
                />
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 overflow-x-hidden"
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

              {status.message && (
                <p
                  className={`text-sm mt-2 ${
                    status.success ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </motion.form>
          </div>
        </section>
      )}
    </>
  );
}

// Success Message Component
export  function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.8 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-5/6 flex flex-col items-center justify-center mb-10 py-10 px-8 md:px-14 rounded-lg shadow-lg space-y-4  text-center bg-gray-600/40 text-white relative overflow-x-hidden"
    >
      {/* Progress Bar on Top */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 5, ease: "linear" }}
        className="absolute top-0 left-0 h-1 bg-green-500"
      ></motion.div>

      <HiMiniCheckBadge className="text-5xl text-green-500" />
      <div>
        <p className="text-lg lg:text-5xl font-semibold">Message Sent!</p>
        <p className="text-sm lg:text-lg text-gray-300 mt-2">
          Thank you for reaching out. I&apos;ll get back to you soon.
        </p>
      </div>

      {/* Floating Animation for Image */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <Image src={successImg} alt="Success" width={200} height={200} />
      </motion.div>
    </motion.div>
  );
}
