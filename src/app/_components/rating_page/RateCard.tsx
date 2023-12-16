"use client";

import { useState } from "react";

const RateCard = () => {
  const [hoverMssg, setHoverMssg] = useState("");
  return (
    <div className="w-1/4 h-32 shadow-md border-2 border-grey-100 ">
      <div className="font-bold pl-2">Overall rating of your internship:</div>
      <div className="pl-48 pt-8 flex space-x-2">
        <div
          className="w-10 h-10 hover:bg-red-500 border-2 rounded-3xl"
          onMouseOver={() => setHoverMssg("1 - Awful")}
          onMouseLeave={() => setHoverMssg("")}
        ></div>
        <div
          className="w-10 h-10 hover:bg-orange-400 border-2 rounded-3xl"
          onMouseOver={() => setHoverMssg("2 - Ok")}
          onMouseLeave={() => setHoverMssg("")}
        ></div>
        <div
          className="w-10 h-10 hover:bg-yellow-300 border-2 rounded-3xl"
          onMouseOver={() => setHoverMssg("3 - Good")}
          onMouseLeave={() => setHoverMssg("")}
        ></div>
        <div
          className="w-10 h-10 hover:bg-lime-500 border-2 rounded-3xl"
          onMouseOver={() => setHoverMssg("4 - Great")}
          onMouseLeave={() => setHoverMssg("")}
        ></div>
        <div
          className="w-10 h-10 hover:bg-green-700 border-2 rounded-3xl"
          onMouseOver={() => setHoverMssg("5 - Awesome")}
          onMouseLeave={() => setHoverMssg("")}
        ></div>
      </div>
      <div className="text-center ml-36">{hoverMssg}</div>
    </div>
  );
};

export default RateCard;
