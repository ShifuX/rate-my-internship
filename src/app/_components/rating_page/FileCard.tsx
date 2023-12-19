"use client";
import { ChangeEvent } from "react";

interface PropI {
  textLabel: string | undefined;
  inputID: string;
}

const FileCard = ({ textLabel, inputID }: PropI) => {
  function checkSize(e: ChangeEvent<HTMLInputElement>) {
    let file = e.currentTarget.files;

    if (!file) return;
    let fileSize = (file[0].size / 1024 / 1024).toFixed(4); // size in MB
    if (Number(fileSize) >= 5) {
      const inputFile = document.getElementById(inputID) as HTMLInputElement;
      inputFile.value = "";
    }
  }

  return (
    <div className="w-1/4 h-48 shadow-md border-2 border-grey-100 ">
      <div className="font-bold pl-2">{textLabel}:</div>
      <div className="flex p-4">
        <div className="bg-[url('/warn-icon.png')] bg-no-repeat bg-contain h-8 w-10 mt-2"></div>
        <div className="text-sm p-2 bg-yellow-200 font-bold rounded-xl">
          Make sure to cross out any sensitive information before submitting
        </div>
      </div>
      <div className="pl-48 pt-5">
        <input
          type="file"
          name={inputID}
          id={inputID}
          onChange={(e) => checkSize(e)}
          required
        />
      </div>
    </div>
  );
};

export default FileCard;
