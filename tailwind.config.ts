import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1f2524",
        slatework: "#303936",
        gold: "#c58a2a",
        sand: "#f5efe5",
        linen: "#fbfaf7",
        rust: "#8d4b24",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(31, 37, 36, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
