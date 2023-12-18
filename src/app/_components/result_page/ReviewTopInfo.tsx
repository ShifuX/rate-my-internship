interface PropsI {
  would_retake: boolean;
  pay: string;
  role: string;
}

const ReviewTopInfo = ({ would_retake, pay, role }: PropsI) => {
  return (
    <div className="flex space-x-4">
      <div className="flex">
        Would Take Again:{" "}
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
