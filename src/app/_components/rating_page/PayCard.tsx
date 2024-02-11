interface PropI {
  textLabel: string | undefined;
  inputID: string | undefined;
  placeHolder: string | undefined;
}

const PayCard = ({ textLabel, inputID, placeHolder }: PropI) => {
  return (
    <div className="w-2/5 desktop2k:w-2/5 desktop1080:w-2/5 laptop:w-2/5 tablet:w-3/5 h-32 shadow-md border-2 border-grey-100 ">
      <div className="font-bold pl-2">{textLabel}:</div>
      <div className="pl-72 desktop2k:pl-116 desktop1080:pl-72 laptop:pl-72 tablet:pl-36 pt-8">
        <input
          type="number"
          name={inputID}
          placeholder={placeHolder}
          className="w-52 h-12 rounded-3xl border-2 text-center bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url('/bag-icon.JPG')`,
          }}
          max={200.0}
          min={0.0}
          step={0.01}
          required
        />
      </div>
    </div>
  );
};

export default PayCard;
