import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Adiba Sadaf | Portfolio",
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
    "Online Interview Assessment System for Students and Professionals",
    "Adiba Sadaf projects",
    "Projects by Adiba Sadaf",
    "Contact Adiba Sadaf",
    "Projects of Adiba Sadaf",
    "Best Freelancer Near me",
    "Affordable Freelancer Near me",
    "Hourly based paid freelancer near me",
    "React-Native Developer near me",
    "React.js Developer Near me",
    "Next.js Developer Near me",
    "Yash Vinod Kapure",
    "Best Freelancer",
    "Front-End Engineer",
    "MERN/MEVN Stack Dev",
    "Full Stack Web Developer",
    "Front-end React-Native Developer",
    "Freelance web development",
    "React-Native development services",
    "MERN Stack projects",
    "MEVN Stack development",
    "Web development portfolio",
    "Adiba Sadaf portfolio",
    "Freelancer services",
    "Who is Adiba Sadaf?",
    "Where does Adiba Sadaf Live?",
    "Web Developer Near me",
    "Front-End Developer near me",
    "Domain Name purchase",
    "Top-rated freelancer",
    "Expert web developer",
    "Skilled React-Native Developer",
    "Professional MERN/MEVN Stack Developer",
    "Exceptional Full Stack Web Developer",
    "Local freelance talent",
    "Outstanding Front-End Engineer",
    "Best web development services",
    "Reliable freelance developer",
    "Talented React-Native specialist",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://portfolio-9mny5hzq8-adibasads-projects.vercel.app/",
  },
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
