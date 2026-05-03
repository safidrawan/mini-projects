import React from "react";

function Card() {
  return (
    <>
<div className="card-wrapper bg-neutral-900 w-full h-screen p-3">
<div className="card max-w-200 m-3">
    <h1 className="text-3xl text-white text-center bg-green-500 p-3 rounded-md">
        Vite + Tailwindcss
      </h1>

      <div className="flex text-white bg-gray-800 text-2xl">
        <img src="/src/assets/laptop-desk.jpeg" alt="" width={200} />
        <div className="card-text p-3">
          <p className="my-5 rounded-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            distinctio!
          </p>
          <div className="name text-cyan-200 ">M.Rafi Safidrawan</div>
          <div className="job-title text-gray-400">Software Engineer</div>
        </div>
      </div>
    </div>
</div>
    </>
  );
}

export default Card;
