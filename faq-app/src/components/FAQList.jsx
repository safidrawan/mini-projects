import FAQItems from "./FAQItems";
import { useState } from "react";
import faqs from "../data/FAQData";

const FAQList = ({ toggleDarkMode, darkMode }) => {
  const [openId, setOpenId] = useState(null);
  const [expandAll, setExpandAll] = useState(false);

  const toggleExpand = (id) => {
    if (expandAll) {
      setExpandAll(false);
    }
    setOpenId((prev) => (prev === id ? null : id));
  };

  const toggleExpandAll = () => {
    setExpandAll((prev) => !prev);
    setOpenId(null);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 inline-block text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>

        <div className="flex items-center space-x-4">
          {/* Expand/Collapse All */}
          <button
            type="button"
            onClick={toggleExpandAll}
            aria-pressed={expandAll}
            className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-300 cursor-pointer rounded-lg"
          >
            <i
              className={expandAll ? "bx bx-collapse-alt" : "bx bx-expand-alt"}
              aria-hidden
            />
            <span>{expandAll ? "Collapse All" : "Expand All"}</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            className="flex justify-center items-center w-10 h-10 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 focus:outline-none focus-visible:ring-blue-500 transition-all duration-300 cursor-pointer dark:from-gray-700 dark:to-gray-800 dark:text-gray-300"
          >
            <i className={`bx bx-${darkMode ? "sun" : "moon"}`} aria-hidden />
          </button>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="bg-white/80 rounded-xl shadow-lg border border-indigo-100/50 overflow-hidden transition-all duration-300 dark:bg-gray-800/80 dark:border-indigo-900/30">
        {faqs.map((item) => (
          <FAQItems
            key={item.id}
            item={item}
            toggleExpand={toggleExpand}
            expandAll={expandAll}
            openId={openId}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQList;
