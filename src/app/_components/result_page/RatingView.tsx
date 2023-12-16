import Image from "next/image";

interface props {
  company: string | undefined;
  logo_path: string | undefined;
}

// image path needs to be updated
const RatingView = ({ company, logo_path }: props) => {
  return (
    <div className=" w-64">
      <div className="text-7xl font-bold font-nunito">3/5</div>
      <div className="mt-12 w-72 h-44 relative">
        <Image
          src={`${logo_path}`}
          alt="company logo"
          fill={true}
          className="shadow-md object-contain"
        />
      </div>
      <div className="text-5xl font-bold font-nunito pt-6">{company}</div>
    </div>
  );
};

export default RatingView;
