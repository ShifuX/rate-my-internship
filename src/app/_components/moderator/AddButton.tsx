"use client";

interface AddBttnI {
  Request: (name: string) => void;
  name: string;
  type: string;
}

const AddButton = ({ Request, name, type }: AddBttnI) => {
  return (
    <button
      type="submit"
      className={`rounded-2xl ${
        type === "Add" ? "bg-blue-300" : "bg-red-300"
      } w-20 p-1 ${type === "Add" ? "hover:bg-blue-500" : "hover:bg-red-500"}`}
      onClick={() => Request(name)}
    >
      {type}
    </button>
  );
};

export default AddButton;
