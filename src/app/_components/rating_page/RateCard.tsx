"use client";

import { useState } from "react";

interface PropsI {
  labelName: string;
  inputID: string;
}

const RateCard = ({ labelName, inputID }: PropsI) => {
  const [hoverMssg, setHoverMssg] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedMssg, setSelectedMssg] = useState("");

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
          onClick={() => {
            setSelectedRating(1);
            setSelectedMssg("1 - Awful");
          }}
        ></div>
        <div
          className={`w-10 h-10 hover:bg-orange-200 border-2 rounded-3xl ${
            selectedRating === 2 ? "bg-orange-400" : "bg-transparent"
          } `}
          onMouseOver={() => setHoverMssg("2 - Ok")}
          onMouseLeave={() => setHoverMssg("")}
          onClick={() => {
            setSelectedRating(2);
            setSelectedMssg("2 - Ok");
          }}
        ></div>
        <div
          className={`w-10 h-10 hover:bg-yellow-100 border-2 rounded-3xl ${
            selectedRating === 3 ? "bg-yellow-300" : "bg-transparent"
          }`}
          onMouseOver={() => setHoverMssg("3 - Good")}
          onMouseLeave={() => setHoverMssg("")}
          onClick={() => {
            setSelectedRating(3);
            setSelectedMssg("3 - Good");
          }}
        ></div>
        <div
          className={`w-10 h-10 hover:bg-lime-300 border-2 rounded-3xl ${
            selectedRating === 4 ? "bg-lime-500" : "bg-transparent"
          }`}
          onMouseOver={() => setHoverMssg("4 - Great")}
          onMouseLeave={() => setHoverMssg("")}
          onClick={() => {
            setSelectedRating(4);
            setSelectedMssg("4 - Great");
          }}
        ></div>
        <div
          className={`w-10 h-10 hover:bg-green-600 border-2 rounded-3xl ${
            selectedRating === 5 ? "bg-green-700" : "bg-transparent"
          }`}
          onMouseOver={() => setHoverMssg("5 - Awesome")}
          onMouseLeave={() => setHoverMssg("")}
          onClick={() => {
            setSelectedRating(5);
            setSelectedMssg("5 - Awesome");
          }}
        ></div>
      </div>
      <div className="text-center ml-36">
        {hoverMssg !== "" ? hoverMssg : selectedMssg}
      </div>
      <div className="invisible">
        <input
          type="text"
          name={inputID}
          value={selectedRating.toString()}
          readOnly
        />
      </div>
    </div>
  );
};

export default RateCard;
