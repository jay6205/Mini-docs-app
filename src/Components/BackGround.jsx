import React from "react";
import NavBar from "./NavBar";

function BackGround() {
  return (
    <>
      <div className="w-full h-screen fixed z-[2]">
        <NavBar />
        <h1 className="leading-none text-[13vw] tracking-tighter absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-zinc-200">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default BackGround;
