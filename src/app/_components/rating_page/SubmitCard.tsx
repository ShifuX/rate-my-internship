const SubmitCard = () => {
  return (
    <div className="desktop2k:w-2/5 desktop1080:w-2/5 laptop:w-2/5 tablet:w-3/5 h-32 shadow-md border-2 border-grey-100 flex justify-center items-center">
      <div className="text-center">
        <input
          type="submit"
          value="Submit Rating"
          className="bg-blue-500 w-40 h-12 rounded-3xl text-lg font-bold text-white hover:bg-blue-700"
        />
      </div>
    </div>
  );
};

export default SubmitCard;
