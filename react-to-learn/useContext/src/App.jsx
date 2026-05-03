import React from "react";

import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from './Context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-4xl text-center m-4 font-bold">Code for React Context Provider</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
