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
    <div className="bg-gray-100 w-3/5 laptop:w-4/5 p-8 mt-6">
      <div className="relative w-full flex flex-row-reverse">
        <div className="font-bold text-sm">{`${
          Month[date.getMonth()]
        } ${date.getDay()}, ${date.getFullYear()}`}</div>
      </div>
      <div className="flex">
        <ReviewSideRatings
          rateName1="Overall"
          rateName2="Challenge"
          rating1={overallRating}
          rating2={challengeRating}
        />
        <div className=" flex-col space-y-10 pl-20">
          <ReviewTopInfo would_retake={would_retake} pay={pay} role={role} />
          <div className="break-words w-3/5">
            <div>{review}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDisplayCard;
