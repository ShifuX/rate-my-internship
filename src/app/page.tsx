import Image from "next/image";
import { Logo, SearchBar, SlideShow } from "./_components";
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
      <div className="relative w-32 h-16 ml-10 mt-4">
        <Logo />
      </div>
      <div className="h-screen text-center pt-72">
        <div className="text-3xl desktop2k:text-5xl text-center font-bold text-white pb-20 desktop2k:pt-24 pt-8">
          <h2>Enter your company to get started</h2>
        </div>
        <div className="w-full desktop2k:h-192 h-128 absolute -z-10 top-52">
          <Image
            src="/bg-option01.jpg"
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
