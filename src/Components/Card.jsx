import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className="w-50 h-60 rounded-[36px] bg-zinc-900/80 text-white py-9 px-6 relative overflow-hidden flex-shrink-0"
    >
      <FaRegFileAlt />
      <p className="text-xs font-semibold mt-5">{data.description}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between py-3 px-8 mb-1">
          <h5>0.mb</h5>
          {data.close ? <IoClose /> : <LuDownload />}
        </div>
        {data.tagDetails.isOpen && (
          <div
            className={`tag w-full py-3 ${
              data.tagDetails.tagColor === "sky" ? "bg-sky-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">
              {data.tagDetails.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
