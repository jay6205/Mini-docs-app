import React, { useRef, useState } from "react";
import Card from "./Card";
import Add from "./Add";

function ForeGround() {
  const fgRef = useRef(null);
  const [data, setData] = useState([
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
  ]);

  return (
    <div
      ref={fgRef}
      className=" w-full h-full z-[3] fixed top-0 left-0 flex gap-15 flex-wrap p-5"
    >
      <Add setData={setData} />
      {data.map((item, index) => (
        <Card key={index} data={item} reference={fgRef} />
      ))}
    </div>
  );
}

export default ForeGround;
