"use client";

interface AddBttnI {
  AddRequest: (name: string) => void;
  name: string;
}

const AddButton = ({ AddRequest, name }: AddBttnI) => {
  return (
    <button
      type="submit"
      className="rounded-2xl bg-blue-300 w-20 p-1 hover:bg-blue-500"
      onClick={() => AddRequest(name)}
    >
      Add
    </button>
  );
};

export default AddButton;
