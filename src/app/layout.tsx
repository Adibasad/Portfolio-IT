"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { motion } from "framer-motion";
import Head from "next/head";
import "./globals.css";
import Header from "./components/header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Adiba Sadaf</title>
        <meta name="description" content="Full Stack Developer portfolio" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
       <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Jaini&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden`}
      >
        {/* Decorative Blobs */}
        {/* <motion.div
          className="fixed top-10 left-10 w-40 h-40 bg-golden rotate-45 rounded-2xl shadow-xl shadow-black/30"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="fixed bottom-20 right-20 w-24 h-24 bg-golden rotate-45 rounded-2xl  shadow-xl shadow-black/30"
          animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        /> */}

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
