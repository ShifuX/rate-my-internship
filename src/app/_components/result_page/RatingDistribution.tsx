import { ReviewSideRatings } from "..";

interface PropsI {
  overallRatingAverage: string;
  challengeRatingOverall: string;
  learnRatingAverage: string;
  funRatingAverage: string;
}

const RatingDistribution = ({
  overallRatingAverage,
  challengeRatingOverall,
  learnRatingAverage,
  funRatingAverage,
}: PropsI) => {
  return (
    <div>
      <div className=" bg-gray-100 laptop:w-128 desktop1080:w-128 desktop2k:w-128 tablet:w-72 h-80 ">
        <div className="font-bold text-lg relative left-8 top-2">Ratings:</div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex space-x-10 pb-6">
            <ReviewSideRatings
              rateName1="Overall"
              rateName2="Challenge"
              rating1={overallRatingAverage}
              rating2={challengeRatingOverall}
            />
            <ReviewSideRatings
              rateName1="Learn"
              rateName2="Fun"
              rating1={learnRatingAverage}
              rating2={funRatingAverage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingDistribution;
