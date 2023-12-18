interface PropI {
  rateName1: string;
  rateName2: string;
  overallRating: string;
  challengeRating: string;
}

const ReviewSideRatings = ({
  rateName1,
  rateName2,
  overallRating,
  challengeRating,
}: PropI) => {
  return (
    <div className=" -mt-5">
      <div className="text-center w-24 text-lg">
        <div>{rateName1}</div>
        <div
          className={`w-24 h-24 ${
            overallRating === "5"
              ? "bg-green-700"
              : overallRating === "4"
              ? "bg-lime-500"
              : overallRating === "3"
              ? "bg-yellow-300"
              : overallRating === "2"
              ? "bg-orange-400"
              : overallRating === "1"
              ? "bg-red-500"
              : "bg-gray-300"
          } text-center font-bold text-3xl flex justify-center items-center`}
        >
          {`${overallRating}.0`}
        </div>
      </div>
      <div className="text-center w-24 text-lg pt-4">
        <div>{rateName2}</div>
        <div
          className={`w-24 h-24 ${
            challengeRating === "5"
              ? "bg-green-700"
              : challengeRating === "4"
              ? "bg-lime-500"
              : challengeRating === "3"
              ? "bg-yellow-300"
              : challengeRating === "2"
              ? "bg-orange-400"
              : challengeRating === "1"
              ? "bg-red-500"
              : "bg-gray-300"
          } text-center font-bold text-3xl flex justify-center items-center`}
        >
          {`${challengeRating}.0`}
        </div>
      </div>
    </div>
  );
};

export default ReviewSideRatings;
