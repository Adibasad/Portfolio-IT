/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Blue-700
        secondary: "#9333EA", // Purple-600
        accent: "#14B8A6", // Teal-500
        // Background and foreground should be handled in CSS as Tailwind v2 does not support CSS variables in config
      },
    },
  },
  plugins: [],
};
