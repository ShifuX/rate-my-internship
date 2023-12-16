import { TextCard } from "../_components";

const RequestPage = () => {
  return (
    <div>
      <div className="w-full flex content-center justify-center pt-44">
        <TextCard
          textLabel="Company Name"
          inputID="companyName"
          placeHolder="Company Name"
        />
      </div>
    </div>
  );
};

export default RequestPage;
