interface PropsI {
  would_retake: boolean;
  pay: string;
  role: string;
}

const ReviewTopInfo = ({ would_retake, pay, role }: PropsI) => {
  return (
    <div
      className="flex desktop2k:flex-row desktop1080:flex-row laptop:flex-row tablet:flex-row phone:flex-col 
    desktop2k:space-y-0 desktop1080:space-y-0 laptop:space-y-0 tablet:space-y-0 phone:space-y-4 phone:space-x-0 space-x-4 desktop2k:space-x-4 
    desktop1080:space-x-4 laptop:space-x-4 tablet:space-x-4 desktop2k:text-lg desktop1080:text-lg laptop:text-lg tablet:text-lg phone:text-sm
     phone:pt-4 desktop2k:pt-0 desktop1080:pt-0 laptop:pt-0 tablet:pt-0"
    >
      <div className="flex">
        Would Take Again:
        <p className="pl-2 font-bold">{would_retake ? "Yes" : "No"}</p>
      </div>
      <div className="flex">
        Pay: <p className="pl-2 font-bold">${pay}</p>
      </div>
      <div className="flex">
        Role: <p className="pl-2 font-bold">{role}</p>
      </div>
    </div>
  );
};

export default ReviewTopInfo;
