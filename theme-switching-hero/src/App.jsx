import { useState, useEffect } from "react";

import Hero from "./components/Hero";
import "boxicons/css/boxicons.min.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(()=>{
    const savedDarkMode = localStorage.getItem("savedDarkMode");
    if (savedDarkMode === "dark") {
      return true;
    } else if(savedDarkMode === "light"){
      return false;
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("savedDarkMode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("savedDarkMode", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="dark:bg-neutral-950 dark:text-neutral-50 min-h-screen relative transition-all duration-300 isolate">
      <div className="absolute inset-0 -z-10 ">
        <div
          className="absolute inset-0 opacity-30 dark:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px) , linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px) ",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <button
        className="fixed top-3 right-3 text-lg lg:top-4 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center bg-amber-400 p-3 rounded-full shadow-lg hover:bg-amber-500 shadow-md z-10"
        onClick={toggleDarkMode}
        title="Toggle dark mode"
      >
        <i
          className={`${
            darkMode ? "bx bx-sun" : "bx bx-moon"
          } text-neutral-950`}
        ></i>
      </button>
      <Hero darkMode={darkMode} />
    </div>
  );
};

export default App;
