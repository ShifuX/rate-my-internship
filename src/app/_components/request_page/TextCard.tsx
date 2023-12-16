interface PropI {
  textLabel: string | undefined;
  inputID: string | undefined;
  placeHolder: string | undefined;
}

const TextCard = async ({ textLabel, inputID, placeHolder }: PropI) => {
  return (
    <div className="w-1/4 h-32 shadow-md border-2 border-grey-100 ">
      <div className="font-bold pl-2">{textLabel}:</div>
      <div className="pl-48 pt-8">
        <input
          type="text"
          name={inputID}
          placeholder={placeHolder}
          className="w-52 h-12 rounded-3xl border-2 text-center"
        />
      </div>
    </div>
  );
};

export default TextCard;
