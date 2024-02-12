interface PropI {
  textLabel: string | undefined;
  inputID: string | undefined;
  placeHolder: string | undefined;
}

const TextCard = async ({ textLabel, inputID, placeHolder }: PropI) => {
  return (
    <div className="w-2/5 desktop2k:w-2/5 desktop1080:w-2/5 laptop:w-2/5 tablet:w-3/5 phone:w-3/5 h-32 shadow-md border-2 border-grey-100 ">
      <div className="font-bold pl-2">{textLabel}:</div>
      <div className="pl-72 desktop2k:pl-72 desktop1080:pl-72 laptop:pl-72 tablet:pl-10 phone:pl-10 pt-8">
        <input
          type="text"
          name={inputID}
          placeholder={placeHolder}
          className="w-72 desktop2k:w-72 desktop1080:w-72 laptop:w-72 tablet:w-4/5 phone:w-4/5 h-12 rounded-3xl border-2 text-center text-md"
          required
        />
      </div>
    </div>
  );
};

export default TextCard;
