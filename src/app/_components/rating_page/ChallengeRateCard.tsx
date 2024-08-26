"use client";

import { useState } from "react";

interface PropsI {
  labelName: string;
  inputID: string;
}

const ChallengeRateCard = ({ labelName, inputID }: PropsI) => {
  const [hoverMssg, setHoverMssg] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedMssg, setSelectedMssg] = useState("");

  return (
    <div className="w-2/5 desktop2k:w-2/5 desktop1080:w-2/5 laptop:w-2/5 tablet:w-3/5 h-32 shadow-md border-2 border-grey-100 ">
      <div className="font-bold pl-2">{labelName}:</div>
      <div className="pl-72 desktop2k:pl-108 desktop1080:pl-72 laptop:pl-72 tablet:pl-32 pt-8 flex space-x-2">
        <div
          className={`group-focus w-10 h-10 hover:bg-green-600 border-2 rounded-3xl ${
            selectedRating === 1 ? "bg-green-700" : "bg-transparent"
          }`}
          onMouseOver={() => setHoverMssg("1 - Very Easy")}
          onMouseLeave={() => setHoverMssg("")}
          onClick={() => {
            setSelectedRating(1);
            setSelectedMssg("1 - Very Easy");
          }}
        ></div>
        <div
          className={`w-10 h-10 hover:bg-lime-300 border-2 rounded-3xl ${
            selectedRating === 2 ? "bg-lime-500" : "bg-transparent"
          } `}
          onMouseOver={() => setHoverMssg("2 - Easy")}
          onMouseLeave={() => setHoverMssg("")}
          onClick={() => {
            setSelectedRating(2);
            setSelectedMssg("2 - Easy");
          }}
        ></div>
        <div
          className={`w-10 h-10 hover:bg-yellow-100 border-2 rounded-3xl ${
            selectedRating === 3 ? "bg-yellow-300" : "bg-transparent"
          }`}
          onMouseOver={() => setHoverMssg("3 - Ok")}
          onMouseLeave={() => setHoverMssg("")}
          onClick={() => {
            setSelectedRating(3);
            setSelectedMssg("3 - Ok");
          }}
        ></div>
        <div
          className={`w-10 h-10 hover:bg-orange-200 border-2 rounded-3xl ${
            selectedRating === 4 ? "bg-orange-400" : "bg-transparent"
          }`}
          onMouseOver={() => setHoverMssg("4 - Challenging")}
          onMouseLeave={() => setHoverMssg("")}
          onClick={() => {
            setSelectedRating(4);
            setSelectedMssg("4 - Challenging");
          }}
        ></div>
        <div
          className={`w-10 h-10 hover:bg-red-300 border-2 rounded-3xl ${
            selectedRating === 5 ? "bg-red-500" : "bg-transparent"
          }`}
          onMouseOver={() => setHoverMssg("5 - Difficult")}
          onMouseLeave={() => setHoverMssg("")}
          onClick={() => {
            setSelectedRating(5);
            setSelectedMssg("5 - Difficult");
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

export default ChallengeRateCard;
