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
    <div className=" -mt-5">
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
      <div className="text-center w-24 text-lg pt-4">
        <div>{rateName2}</div>
        <div
          className={`w-24 h-24 ${
            rating2 === "5"
              ? "bg-green-700"
              : rating2 === "4"
              ? "bg-lime-500"
              : rating2 === "3"
              ? "bg-yellow-300"
              : rating2 === "2"
              ? "bg-orange-400"
              : rating2 === "1"
              ? "bg-red-500"
              : "bg-gray-300"
          } text-center font-bold text-3xl flex justify-center items-center`}
        >
          {`${rating2}${rating2.includes(".") ? "" : ".0"}`}
        </div>
      </div>
    </div>
  );
};

export default ReviewSideRatings;
