import { RateCard, RetakeCard, TextCard } from "../_components";

const page = () => {
  return (
    <div className="h-screen">
      <form className="w-full flex flex-col space-y-8 pt-44 justify-center content-center items-center">
        <RateCard labelName="Overall internship rating" />
        <RateCard labelName="Rate how fun your internship was" />
        <RateCard labelName="Rate how much you learned" />
        <RateCard labelName="Rate how challenging the internship was" />
        <TextCard textLabel="Role" inputID="Role" placeHolder="Role Name" />
        <RetakeCard textLabel="Would you intern here again" inputID="checked" />
      </form>
    </div>
  );
};

export default page;
