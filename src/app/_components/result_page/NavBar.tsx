import { Logo, SearchBar } from "..";
import prisma from "../../db";

async function GetCompanies() {
  const companies = await prisma.company.findMany({
    select: {
      name: true,
    },
  });

  return companies.map((company) => company.name);
}

const NavBar = async () => {
  const companyNames = await GetCompanies();

  return (
    <div className="bg-black w-screen h-16">
      <div className="pl-10 pt-3 flex space-x-6 desktop2k:space-x-6 desktop1080:space-x-6 laptop:space-x-6 tablet:space-x-6 phone:space-x-0">
        <div className="relative w-24 h-10 mr-96 desktop2k:mr-96 desktop1080:mr-96 laptop:mr-52 tablet:mr-20 desktop2k:inline desktop1080:inline laptop:inline tablet:inline phone:hidden">
          <Logo />
        </div>
        <div className=" text-white text-3xl desktop2k:inline desktop1080:inline laptop:inline tablet:inline phone:hidden font-bold">
          Company
        </div>
        <SearchBar location="nav" companyNames={companyNames} />
      </div>
    </div>
  );
};

export default NavBar;
