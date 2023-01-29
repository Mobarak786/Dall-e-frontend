import React from "react";
import downloadIcon from "../assets/download.png";
import { downloadImage } from "../Utils";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div
      id="_id"
      className=" rounded-xl group relative shadow-card 
   hover:shadow-cardhover card"
    >
      <img src={photo} className=" w-full h-auto  object-contain rounded-xl" />
      <div
        className="group-hover:flex flex-col max-h[94.5%]
       hidden absolute bottom-0 left-0  bg-[#10131F] m-2 p-4 rounded-md"
      >
        <p className="text-white text-md font-bold overflow-y-auto">{prompt}</p>
        <div className="w-full mt-5 flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <div
              className=" w-7 h-7 rounded-full bg-green-500 flex
            items-center justify-center text-md text-sm text-white"
            >
              {name[0]}
            </div>
            <h2 className="text-white text-md">{name}</h2>
          </div>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="bg-white flex justify-center items-center rounded-full h-7 w-7"
          >
            <img
              className="w-5 h-5 object-contain"
              src={downloadIcon}
              alt="download-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
