import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");

    if (stored === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      // Default to light if no theme stored
      setDark(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-700 dark:bg-gray-200 text-gray-100 dark:text-gray-800 px-4 py-2 rounded-full shadow-sm text-sm font-medium transition-colors duration-300"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
