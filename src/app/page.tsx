import Image from "next/image";
import { SearchBar, SlideShow } from "./_components";
import prisma from "./db";

async function getCompanyImages() {
  const companies = await prisma.company.findMany({
    take: 4,
    include: {
      reviews: true,
    },
  });

  return companies.map((company) => {
    return { img: company.logo_path, name: company.name };
  });
}

export default async function Home() {
  const imageAndName = await getCompanyImages();

  return (
    <>
      <div className="h-screen text-center pt-96">
        <div className="text-3xl text-center font-bold text-white pb-20">
          <h2>Enter your company to get started</h2>
        </div>
        <div className="w-full h-128 absolute -z-10 top-52">
          <Image
            src="/home-pic.JPG"
            alt="home page image"
            fill={true}
            className=""
          />
        </div>
        <div className=" flex justify-center">
          <SearchBar location="home" />
        </div>
      </div>
      <div className="h-screen flex flex-col space-y-32 justify-center items-center ">
        <div className="h-10 text-6xl font-bold font-nunito">
          A Quick Glance
        </div>
        <div className="pb-32">
          <SlideShow imgAndName={imageAndName} />
        </div>
      </div>
    </>
  );
}
