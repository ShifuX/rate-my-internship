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
    <div className="flex space-x-4">
      {imgAndName.map((obj) => {
        return (
          <div className="w-72 h-40 shadow-md border-2 border-grey-100 overflow-hidden relative">
            <Image
              src={obj.img}
              alt="company logo"
              fill={true}
              className="shadow-md object-cover"
              onClick={() => HandleClick(obj.name)}
            />
          </div>
        );
      })}
    </div>
  );
};
export default SlideShow;
