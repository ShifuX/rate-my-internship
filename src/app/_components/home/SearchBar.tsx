"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

interface SearchBarI {
  location: string;
  companyNames: string[];
}

const SearchBar = ({ location, companyNames }: SearchBarI) => {
  const router = useRouter();
  const NAVBARSIZE =
    location === "home"
      ? "text-xl rounded-3xl h-12 w-96 desktop2k:w-108 desktop1080:w-96 laptop:w-96 phone:w-4/5"
      : "text-lg rounded-3xl h-10 w-96";
  let [searchInput, setSearchInput] = useState("");
  let [filteredNames, setFilteredNames] = useState<string[]>();

  function SearchForCompany(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (searchInput.length === 0 || searchInput === "") return;

    router.push(`/resultpage/${searchInput.trimEnd()}`);
  }

  function HandleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);

    if (e.target.value === "") {
      setFilteredNames([]);
      return;
    }

    FilterCompanyNames();
  }

  function FilterCompanyNames() {
    if (searchInput.length < 1) return;

    const filtered = companyNames.filter((company) =>
      company.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilteredNames(filtered);
  }

  function HandleDropDownChange(company: string) {
    setSearchInput(company);
    setFilteredNames([]);
    document.getElementById("searchCompany")?.focus();
  }

  return (
    <form onSubmit={SearchForCompany} autoComplete="off">
      <input
        type="search"
        name="searchCompany"
        id="searchCompany"
        placeholder="Company Name"
        autoComplete="off"
        className={`bg-white ${NAVBARSIZE} font-bold font-nunito bg-origin-content p-2 text-center bg-no-repeat bg-contain border-transparent focus:outline-none`}
        style={{
          backgroundImage: `url('/building-icon.png')`,
        }}
        onChange={HandleChange}
        value={searchInput}
      />
      {filteredNames != null ? (
        <ul className="bg-white rounded-md max-h-40 overflow-y-scroll">
          {filteredNames?.map((company) => {
            return (
              <li
                key={company}
                className="hover:bg-gray-200 p-2 text-lg font-bold"
                onClick={() => HandleDropDownChange(company)}
              >
                {company}
              </li>
            );
          })}
        </ul>
      ) : null}
    </form>
  );
};

export default SearchBar;
