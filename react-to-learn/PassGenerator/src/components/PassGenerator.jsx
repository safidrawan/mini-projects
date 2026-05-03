import React, { useCallback, useEffect, useRef, useState } from "react";

function PassGenerator() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(0);
  const [isSymbolAllowed, setIsSymbolAllowed] = useState(0);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const generatePass = useCallback(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
    let pass = "";

    let allChars = "";
    allChars += letters;

    isNumberAllowed ? (allChars += numbers) : "";
    isSymbolAllowed ? (allChars += symbols) : "";

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * allChars.length);
      pass += allChars[randomIndex];
    }
    setPassword(pass);
  });

  function changePermission(prevValue) {
    return prevValue ? 0 : 1;
  }
  const copyToClipBoard = ()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current ?.select()
  }

  useEffect(() => generatePass(), [length, isNumberAllowed, isSymbolAllowed]);

  return (
    <div className="w-full h-screen bg-neutral-950 p-5 flex justify-center text-white text-2xl font-medium">
      <div className="password-card  bg-gray-900 h-60 rounded-2xl w-2xl flex flex-col justify-center items-center gap-5">
        <h1>Password Generator</h1>
        <div>
          <input
            name="password"
            id="password"
            value={password}
            className="bg-white rounded-l-2xl w-lg py-2 px-3 text-orange-500 outline-none"
            type="text"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyToClipBoard} className="bg-blue-600 py-2 px-3 rounded-r-2xl cursor-pointer">
            Copy
          </button>
          <div className="flex gap-2 mt-5 text-orange-300">
            <input
              type="range"
              name="range"
              id="range"
              value={length}
              min={1}
              max={24}
              className="mr-2"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="range">length:{length}</label>
            <input
              value={isNumberAllowed}
              onChange={() =>
                setIsNumberAllowed(changePermission(isNumberAllowed))
              }
              type="checkbox"
              name="numbers"
              id="numbers"
              className="ml-2"
              style={{ width: "16px", height: "16" }}
            />
            <label htmlFor="numbers">Numbers</label>
            <input
              value={isSymbolAllowed}
              onChange={() => {
                setIsSymbolAllowed(changePermission(isSymbolAllowed));
              }}
              type="checkbox"
              name="chars"
              id="chars"
              className="ml-2"
              style={{ width: "16px", height: "16" }}
            />
            <label htmlFor="chars">Symbols</label>
          </div>
        </div>
        <button
          className="bg-blue-600 py-2 px-6 rounded-2xl cursor-pointer"
          onClick={() => generatePass()}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default PassGenerator;
