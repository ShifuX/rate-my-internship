import prisma from "../../db";
import AddButton from "./AddButton";

interface RequestCardI {
  name: string;
  count: number;
  date: Date;
  AddRequest: (name: string) => void;
}

const RequestsCard = ({ name, count, date, AddRequest }: RequestCardI) => {
  return (
    <div className="bg-gray-200 shadow-xl">
      <div className="flex space-x-6">
        <div>Name: {name}</div>
        <div>Count: {count}</div>
        <div>
          Date: {`${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`}
        </div>
        <div>
          <AddButton AddRequest={AddRequest} name={name} />
        </div>
      </div>
    </div>
  );
};

export default RequestsCard;
