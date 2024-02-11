interface PropI {
  textLabel: string | undefined;
  inputID: string | undefined;
}

const RetakeCard = ({ textLabel, inputID }: PropI) => {
  return (
    <div className="w-2/5 desktop2k:w-2/5 desktop1080:w-2/5 laptop:w-2/5 tablet:w-3/5 h-40 shadow-md border-2 border-grey-100 ">
      <div className="font-bold pl-2">{textLabel}:</div>
      <div className=" pl-80 desktop2k:pl-128 desktop1080:pl-80 laptop:pl-80 tablet:pl-52 pt-8">
        <div className="flex space-x-8">
          <div>
            <input
              type="radio"
              value="1"
              name={inputID}
              className="w-10 h-12 border-2 text-center"
            />
            <div className="text-center">Yes</div>
          </div>
          <div>
            <input
              type="radio"
              value="0"
              name={inputID}
              className="w-10 h-12 border-2 text-center"
            />
            <div className="text-center">No</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetakeCard;
