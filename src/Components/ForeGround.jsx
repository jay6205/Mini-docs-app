import React, { useRef, useState } from "react";
import Card from "./Card";

function ForeGround() {
  const fgRef = useRef(null);
  const data = [
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "0.9mb",
      close: true,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "0.9mb",
      close: true,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "0.9mb",
      close: true,
      tagDetails: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "sky",
      },
    },
  ];
  return (
    <div ref={fgRef} className=" w-full h-full z-[3] fixed top-0 left-0 flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference={fgRef} />
      ))}
    </div>
  );
}

export default ForeGround;
