// Add a file upload and pass file data to AddRequest function
import AddButton from "./AddButton";

interface RequestCardI {
  name: string;
  count: number;
  date: Date;
  AddRequest: (name: string) => void;
  DeleteRequest: (name: string) => void;
}

const RequestsCard = ({
  name,
  count,
  date,
  AddRequest,
  DeleteRequest,
}: RequestCardI) => {
  return (
    <div className="bg-gray-200 shadow-xl">
      <div className="flex space-x-6">
        <div>Name: {name}</div>
        <div>Count: {count}</div>
        <div>
          Date: {`${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`}
        </div>
        <div>
          <AddButton Request={AddRequest} name={name} type="Add" />
        </div>
        <div>
          <AddButton Request={DeleteRequest} name={name} type="Delete" />
        </div>
      </div>
    </div>
  );
};

export default RequestsCard;
