import { ReviewSideRatings, ReviewTopInfo } from "..";

interface PropsI {
  would_retake: boolean;
  pay: string;
  role: string;
  review: string;
  date: Date;
  overallRating: string;
  challengeRating: string;
}

enum Month {
  Jan,
  Feb,
  March,
  April,
  May,
  June,
  July,
  August,
  Sept,
  Oct,
  Nov,
  Dec,
}

const ReviewDisplayCard = ({
  would_retake,
  pay,
  role,
  review,
  date,
  overallRating,
  challengeRating,
}: PropsI) => {
  return (
    <div className="bg-gray-100 w-3/5 desktop2k:w-3/5 desktop1080:w-3/5 laptop:w-4/5 tablet:w-4/5 phone:w-4/5 p-8 mt-6">
      <div className="relative w-full flex flex-row-reverse">
        <div className="font-bold text-sm">{`${
          Month[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()}`}</div>
      </div>
      <div className="flex desktop2k:flex-row desktop1080:flex-row laptop:flex-row tablet:flex-row phone:flex-col desktop2k:pt-0 desktop1080:pt-0 laptop:pt-0 tablet:pt-0 phone:pt-5 -mt-5">
        <ReviewSideRatings
          rateName1="Overall"
          rateName2="Challenge"
          rating1={overallRating}
          rating2={challengeRating}
        />
        <div className="w-4/5 flex-col space-y-10 pl-20 desktop2k:pl-20 desktop1080:pl-20 laptop:pl-20 tablet:pl-20 phone:pl-1">
          <ReviewTopInfo would_retake={would_retake} pay={pay} role={role} />
          <div className="break-words w-full">
            <div className="desktop2k:text-lg desktop1080:text-lg laptop:text-lg tablet:text-lg phone:text-sm">{review}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDisplayCard;
