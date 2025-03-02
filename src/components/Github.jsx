import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className="bg-gray-600 text-2xl p-5 text-center text-white flex gap-3">
      <img
        src={data.avatar_url}
        alt="user profile image"
        className="rounded-lg"
        width={300}
      />
      <div className="text-left">
        <div><b>Name:</b> {data.name}</div>
        <div><b>Username:</b> {data.login}</div>
      </div>
    </div>
  );
}

export default Github;
export const githubInfoLoader = async ()=>{
    const response= await  fetch("https://api.github.com/users/safidrawan")
    return response.json()
}
