"use client";

import { useState } from "react";

interface PropI {
  textLabel: string | undefined;
  inputID: string | undefined;
}

const ReviewCard = ({ textLabel, inputID }: PropI) => {
  const [text, setText] = useState("");

  return (
    <div className="w-2/5 h-116 shadow-md border-2 border-grey-100 ">
      <div className="font-bold pl-2">{textLabel}:</div>
      <div className="w-full mt-10 p-4 bg-gray-200 flex-col flex justify-center items-center">
        <h3 className="text-lg font-bold">Guidelines</h3>
        <ul className="list-disc text-sm">
          <li>Your rating must not use any profanity or inappropiate words.</li>
          <li>
            Look over your rating to make sure everything is filled out
            correctly.
          </li>
        </ul>
      </div>
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
      <div className="flex flex-row-reverse laptop:pr-5">{text.length}/350</div>
    </div>
  );
};

export default ReviewCard;
