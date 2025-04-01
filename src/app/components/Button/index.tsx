import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  variant = "primary",
  icon,
}) => {
  const baseStyles =
    "px-3 py-2 text-lg font-medium rounded-lg flex items-center gap-2 transition";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-primaryDark text-white hover:bg-purple-600",
    outline: "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      className={`${baseStyles} ${variants[variant]}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {icon} {text}
    </motion.a>
  );
};

export default Button;
