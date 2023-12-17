interface PropsI {
  would_retake: boolean;
  pay: string;
  role: string;
  review: string;
  date: Date;
}

const ReviewDisplayCard = ({
  would_retake,
  pay,
  role,
  date,
  review,
}: PropsI) => {
  return (
    <div className="bg-gray-200 w-2/5 ml-20 mt-20">
      <div>Posted: {date.toUTCString()}</div>
      <div className="flex space-x-2">
        <div>Would Take Again: {would_retake ? "Yes" : "No"}</div>
        <div>Pay: {pay}</div>
        <div>Role: {role}</div>
      </div>
      <div className="break-words">
        <div>{review}</div>
      </div>
    </div>
  );
};

export default ReviewDisplayCard;
