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
    <div className="w-2/5 desktop2k:w-2/5 desktop1080:w-2/5 laptop:w-2/5 tablet:w-3/5 h-48 shadow-md border-2 border-grey-100 ">
      <div className="font-bold pl-2">{textLabel}:</div>
      <div className="flex p-4">
        <div className="bg-[url('/warn-icon.png')] bg-no-repeat bg-contain h-9 w-12 mt-4"></div>
        <div className="text-sm p-2 bg-yellow-200 font-bold rounded-xl">
          Make sure to cross out any sensitive information before submitting, it
          will be deleted from storage upon review (used to verify pay and job
          role/title)
        </div>
      </div>
      <div className=" desktop2k:pl-72 desktop1080:pl-72 laptop:pl-72 tablet:pl-52 pt-5">
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
