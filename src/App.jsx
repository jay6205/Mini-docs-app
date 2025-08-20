import { useState } from "react";
import NavBar from "./Components/NavBar";
import BackGround from "./Components/BackGround";
import ForeGround from "./Components/ForeGround";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-800 relative">
        <BackGround/>
        <ForeGround/>
      </div>
    </>
  );
}

export default App;
