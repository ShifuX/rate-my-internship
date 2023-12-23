"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

interface PropsI {
  imgAndName: { img: string; name: string }[];
}

// Fix the onClick for the images: the relative is what is making it fail

const SlideShow = ({ imgAndName }: PropsI) => {
  const router = useRouter();
  const slides = imgAndName.map((obj) => obj.img);

  function HandleClick(companyName: string) {
    console.log(companyName);
    //router.push(`/resultpage/${companyName}`);
  }

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative w-96 h-96">
      <div
        className={`flex transition ease-out duration-40  h-full`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {imgAndName.map((obj) => {
          return (
            <img
              src={obj.img}
              alt="company logo"
              className="object-contain"
              onClick={() => HandleClick(obj.name)}
              style={{ pointerEvents: "all" }}
              key={obj.name}
            />
          );
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-gray-500 px-10 text-2xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s: any, i: any) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-blue-500" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
export default SlideShow;
