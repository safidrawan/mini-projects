import React, { useState } from "react";

function BgChanger() {
  const [bgColor, setBgColor] = useState("bg-gray-500");
  return (
    <div
      className={`w-full h-screen duration-200 ${bgColor}`}
      
    >
      <div className="fixed flex bottom-12 justify-center flex-wrap inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setBgColor("bg-red-500")}
            className="bg-red-500 outline-none px-4 py-1  shadow-lg rounded-full"
          >
            Red
          </button>
          <button
            onClick={() => setBgColor("bg-green-500")}
            className="bg-green-500 outline-none px-4 py-1  shadow-lg rounded-full"
          >
            Green
          </button>
          <button
            onClick={() => setBgColor("bg-gray-500")}
            className="bg-gray-500 outline-none px-4 py-1  shadow-lg rounded-full"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default BgChanger;
