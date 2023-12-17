const SubmitCard = () => {
  return (
    <div className="w-1/4 h-32 shadow-md border-2 border-grey-100 ">
      <div className="pt-8 text-center">
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
