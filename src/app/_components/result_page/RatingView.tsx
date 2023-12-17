"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface props {
  company: string | undefined;
  logo_path: string | undefined;
}

// refactor sections into components
const RatingView = ({ company, logo_path }: props) => {
  const router = useRouter();

  const RedirectToRatingPage = () => {
    router.push(`/ratecompany/${company}`);
  };

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
      <div className="grid grid-cols-2 w-72 mt-8">
        <div className=" text-center">
          <div className="text-3xl font-bold">80%</div>
          <div className="text-sm">Would take again</div>
        </div>
        <div className=" border-l-2 border-black text-center">
          <div className="text-3xl font-bold">3.5</div>
          <div className="text-sm">Level of Difficulty</div>
        </div>
      </div>
      <div className="mt-10">
        <button
          className="bg-blue-500 w-36 h-12 rounded-3xl text-lg font-bold text-white hover:bg-blue-700"
          onClick={RedirectToRatingPage}
        >
          Rate {"->"}
        </button>
      </div>
    </div>
  );
};

export default RatingView;
