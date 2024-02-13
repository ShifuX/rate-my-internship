import Image from "next/image";
import { Footer, Logo, SearchBar, SlideShow } from "./_components";
import prisma from "./db";
import bcrypt from "bcrypt";

// interface ImageAndNameAndCountI {
//   company: {
//     img: string;
//     name: string;
//     reviewCount: number;
//   }[];
// }

async function getCompanyImages() {
  const companies = await prisma.company.findMany({
    select: {
      name: true,
      logo_path: true,
      review_count: true,
    },
  });

  return companies.map((company) => {
    return {
      img: company.logo_path,
      name: company.name,
      reviewCount: company.review_count,
    };
  });
}

export default async function Home() {
  const imageAndNameAndReviewCount = await getCompanyImages();
  const companyNames = imageAndNameAndReviewCount.map(
    (company) => company.name
  );

  function GetTopFourCompaniesMostRatings() {
    const topFourCompanies = [];
    const sortedCompanies = imageAndNameAndReviewCount.sort((a, b) => {
      if (a.reviewCount === 0) {
        a.reviewCount = Infinity;
      }

      if (b.reviewCount === 0) {
        b.reviewCount = Infinity;
      }

      return a.reviewCount - b.reviewCount;
    });

    for (let i = 0; i < 4; i++) {
      topFourCompanies.push(sortedCompanies[i]);
    }
    console.log(sortedCompanies);

    console.log(topFourCompanies);

    return topFourCompanies;
  }

  const mostRatedCompanies = GetTopFourCompaniesMostRatings();

  return (
    <div className=" relative">
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
          <SearchBar location="home" companyNames={companyNames} />
        </div>
      </div>
      <div className="pb-52 flex flex-col space-y-32 justify-center items-center ">
        <div className="h-10 text-6xl desktop2k:text-6xl desktop1080:text-6xl laptop:text-6xl tablet:text-6xl phone:text-3xl font-bold font-nunito">
          Most Rated Companies
        </div>
        <div className="pb-52">
          <SlideShow imgAndName={mostRatedCompanies} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
