interface PropI {
  rateName1: string;
  rateName2: string;
  rating1: string;
  rating2: string;
}

const ReviewSideRatings = ({
  rateName1,
  rateName2,
  rating1,
  rating2,
}: PropI) => {
  return (
    <div>
      <div className="flex desktop2k:flex-col desktop1080:flex-col laptop:flex-col tablet:flex-col phone:flex-row desktop2k:space-x-0 desktop1080:space-x-0 laptop:space-x-0 tablet:space-x-0 phone:space-x-4">
        <div className="text-center w-24 text-lg">
          <div>{rateName1}</div>
          <div
            className={`w-24 h-24 ${
              rating1 === "5"
                ? "bg-green-700"
                : rating1 === "4"
                ? "bg-lime-500"
                : rating1 === "3"
                ? "bg-yellow-300"
                : rating1 === "2"
                ? "bg-orange-400"
                : rating1 === "1"
                ? "bg-red-500"
                : "bg-gray-300"
            } text-center font-bold text-3xl flex justify-center items-center`}
          >
            {`${rating1}${rating1.includes(".") ? "" : ".0"}`}
          </div>
        </div>
        <div className="text-center w-24 text-lg">
          <div>{rateName2}</div>
          <div
            className={`w-24 h-24 ${
              rating2 === "5"
                ? "bg-red-500"
                : rating2 === "4"
                ? "bg-orange-400"
                : rating2 === "3"
                ? "bg-yellow-300"
                : rating2 === "2"
                ? "bg-lime-500"
                : rating2 === "1"
                ? "bg-green-700"
                : "bg-gray-300"
            } text-center font-bold text-3xl flex justify-center items-center`}
          >
            {`${rating2}${rating2.includes(".") ? "" : ".0"}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSideRatings;
