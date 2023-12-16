"use client";

import { useState } from "react";

interface PropsI {
  labelName: string;
}

const RateCard = ({ labelName }: PropsI) => {
  const [hoverMssg, setHoverMssg] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  return (
    <div className="w-1/4 h-32 shadow-md border-2 border-grey-100 ">
      <div className="font-bold pl-2">{labelName}:</div>
      <div className="pl-48 pt-8 flex space-x-2">
        <div
          className={`group-focus w-10 h-10 hover:bg-red-300 border-2 rounded-3xl ${
            selectedRating === 1 ? "bg-red-500" : "bg-transparent"
          }`}
          onMouseOver={() => setHoverMssg("1 - Awful")}
          onMouseLeave={() => setHoverMssg("")}
          onClick={() => setSelectedRating(1)}
        ></div>
        <div
          className={`w-10 h-10 hover:bg-orange-200 border-2 rounded-3xl ${
            selectedRating === 2 ? "bg-orange-400" : "bg-transparent"
          } `}
          onMouseOver={() => setHoverMssg("2 - Ok")}
          onMouseLeave={() => setHoverMssg("")}
          onClick={() => setSelectedRating(2)}
        ></div>
        <div
          className={`w-10 h-10 hover:bg-yellow-100 border-2 rounded-3xl ${
            selectedRating === 3 ? "bg-yellow-300" : "bg-transparent"
          }`}
          onMouseOver={() => setHoverMssg("3 - Good")}
          onMouseLeave={() => setHoverMssg("")}
          onClick={() => setSelectedRating(3)}
        ></div>
        <div
          className={`w-10 h-10 hover:bg-lime-300 border-2 rounded-3xl ${
            selectedRating === 4 ? "bg-lime-500" : "bg-transparent"
          }`}
          onMouseOver={() => setHoverMssg("4 - Great")}
          onMouseLeave={() => setHoverMssg("")}
          onClick={() => setSelectedRating(4)}
        ></div>
        <div
          className={`w-10 h-10 hover:bg-green-600 border-2 rounded-3xl ${
            selectedRating === 5 ? "bg-green-700" : "bg-transparent"
          }`}
          onMouseOver={() => setHoverMssg("5 - Awesome")}
          onMouseLeave={() => setHoverMssg("")}
          onClick={() => setSelectedRating(5)}
        ></div>
      </div>
      <div className="text-center ml-36">{hoverMssg}</div>
      <div className="invisible">
        <input type="text" name="rateBox" value={selectedRating.toString()} />
      </div>
    </div>
  );
};

export default RateCard;
