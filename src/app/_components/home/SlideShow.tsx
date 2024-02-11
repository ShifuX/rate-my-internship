"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface PropsI {
  imgAndName: { img: string; name: string }[];
}

// Fix the onClick for the images: the relative is what is making it fail

const SlideShow = ({ imgAndName }: PropsI) => {
  const router = useRouter();

  function HandleClick(companyName: string) {
    console.log(companyName);
    router.push(`/resultpage/${companyName}`);
  }

  return (
    <div
      className="flex desktop2k:flex-row desktop1080:flex-row laptop:flex-row tablet:flex-row phone:flex-col 
    desktop2k:space-y-0 desktop1080:space-y-0 laptop:space-y-0 tablet:space-y-0 phone:space-y-5 desktop2k:space-x-4 desktop1080:space-x-4 laptop:space-x-4 tablet:space-x-4"
    >
      {imgAndName.map((obj) => {
        return (
          <div
            className="w-72 h-40 shadow-md border-2 border-grey-100 overflow-hidden relative"
            key={obj.name}
          >
            <Image
              src={obj.img}
              alt="company logo"
              fill={true}
              className="shadow-md object-cover"
              onClick={() => HandleClick(obj.name)}
              key={obj.name}
            />
          </div>
        );
      })}
    </div>
  );
};
export default SlideShow;
