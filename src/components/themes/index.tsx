"use client"
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import React from "react";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  // Set default theme to "light" on the initial render
  React.useEffect(() => {
    setTheme("light");
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === 'dark' ? <BsSunFill size={30} /> : <MdDarkMode size={30} />}
    </button>
  );
}