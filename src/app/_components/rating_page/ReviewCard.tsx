"use client";

import { useState } from "react";

interface PropI {
  textLabel: string | undefined;
  inputID: string | undefined;
}

const ReviewCard = ({ textLabel, inputID }: PropI) => {
  const [text, setText] = useState("");

  return (
    <div className="w-2/5 h-96 shadow-md border-2 border-grey-100 ">
      <div className="font-bold pl-2">{textLabel}:</div>
      <div className="w-full text-center pt-10">Guidlines go here</div>
      <div className="pt-26">
        <div className="w-full flex justify-center content-center p-9">
          <textarea
            name={inputID}
            placeholder="What do you want future interns to know?"
            cols={30}
            rows={10}
            maxLength={350}
            className="border-2 w-full h-48 text-md p-4 resize-none"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <div className=" -mt-4 ml-160">{text.length}/350</div>
    </div>
  );
};

export default ReviewCard;
