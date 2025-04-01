import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Adiba Sadaf | Full Stack Developer",
  description:
    "Portfolio of Adiba Sadaf, a skilled Full Stack Developer specializing in Next.js, React, Node.js, TypeScript, and PostgreSQL. Also experienced in MongoDB, Express.js, and JavaScript. Other Languages include Java and Python.",
  keywords: [
    "Full Stack Developer",
    "Adiba Sadaf",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Java Developer",
    "Python Developer",
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Portfolio",
    "Software Engineer",
    "Full Stack Engineer",
    "React",
    "Node",
    "Java",
    "Python",
    "Mongo",
    "Postgres",
    "Express",
    "MERN Stack",
    "Make applications",
    "Build websites",
    "Develop software",
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
        style={{ overflowX: "hidden" }}
      >
        {children}
      </body>
    </html>
  );
}
