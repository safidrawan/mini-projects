import React from "react";

const FAQItems = ({ item, toggleExpand, expandAll, openId }) => {
  return (
    <div className="flex flex-col p-3 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300 hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-transparent dark:hover:from-gray-800/50 dark:hover:to-transparent">
      <button
        onClick={() => {
          toggleExpand(item.id);
        }}
        className={`text-left font-semibold w-full py-5 px-4 flex items-center justify-between rounded-lg focus:outline-none transition-all duration-300 cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-600 dark:hover:from-indigo-400 dark:hover:to-pink-400
    ${
      openId === item.id || expandAll
        ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400"
        : "text-gray-900 dark:text-gray-300"
    }`}
      >
        <span className="text-lg pr-6 font-medium ">{item.question}</span>

        <div
          className={`flex-shrink-0 flex justify-center items-center w-8 h-8 aspect-square rounded-full bg-gray-200 dark:bg-gray-700 hover:text-gray-200 ${
            item.id === openId || expandAll
              ? "bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400"
              : ""
          }`}
        >
          <i
            className={`bx-chevron-down   dark:text-gray-300 transition-all duration-500 transl bx ${
              expandAll || openId === item.id
                ? "rotate-180 text-gray-200 dark:text-gray-900"
                : "rotate-0 text-gray-700"
            }  `}
          ></i>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          item.id === openId || expandAll ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="pl-6 text-gray-700 dark:text-gray-300">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export default FAQItems;
