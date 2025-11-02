/// tailwind.config.js
import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ Enables dark mode via <html class="dark">
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/react/**/*.{js,ts,jsx,tsx}", // ✅ Ensures HeroUI styles get included
  ],
  theme: {},
  plugins: [heroui()], // ✅ HeroUI plugin for Tailwind
};
