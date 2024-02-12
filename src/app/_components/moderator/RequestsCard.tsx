"use client";
import { ChangeEvent, useState } from "react";
import AddButton from "./AddButton";

interface RequestCardI {
  name: string;
  count: number;
  date: Date;
}

const RequestsCard = ({ name, count, date }: RequestCardI) => {
  const [file, setFile] = useState<File>(
    new File([""], "filename", { type: "text/html" })
  );

  function HandleFile(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files) {
      setFile(files[0]);
    }
  }

  return (
    <div className="bg-gray-200 shadow-xl">
      <div className="flex space-x-6">
        <div>Name: {name}</div>
        <div>Count: {count}</div>
        <div>
          Date: {`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}
        </div>
        <div className="pt-1">
          <input
            type="file"
            name="logoFile"
            id="logoFile"
            onChange={(e) => HandleFile(e)}
          />
        </div>
        <div>
          <input
            type="radio"
            value="1"
            name="addOrDeleteOption"
            id="addOrDeleteOption"
          />
          <div className=" text-center">Add</div>
        </div>
        <div>
          <input
            type="radio"
            value="0"
            name="addOrDeleteOption"
            id="addOrDeleteOption"
          />
          <div className=" text-center">Delete</div>
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            className="bg-blue-200 rounded-2xl p-1 w-16 hover:bg-blue-500"
          />
        </div>
        <div className=" hidden">
          <input
            type="text"
            name="companyName"
            id="companyName"
            defaultValue={name}
          />
        </div>
      </div>
    </div>
  );
};

export default RequestsCard;
