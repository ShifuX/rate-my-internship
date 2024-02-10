"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchBarI {
  location: string;
}

const SearchBar = ({ location }: SearchBarI) => {
  const router = useRouter();
  const NAVBARSIZE =
    location === "home"
      ? "text-xl rounded-3xl h-12 w-96 desktop2k:w-108"
      : "text-lg rounded-3xl h-10 w-96";
  let [searchInput, setSearchInput] = useState("");

  function SearchForCompany(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (searchInput.length === 0 || searchInput === "") return;

    router.push(`/resultpage/${searchInput.trimEnd()}`);
  }

  return (
    <form onSubmit={SearchForCompany}>
      <input
        type="search"
        name="searchCompany"
        id="searchCompany"
        placeholder="Company Name"
        className={`bg-white ${NAVBARSIZE} font-bold font-nunito bg-origin-content p-2 text-center bg-no-repeat bg-contain border-transparent focus:outline-none`}
        style={{
          backgroundImage: `url('/building-icon.png')`,
        }}
        onChange={(e) => setSearchInput(e.currentTarget.value)}
        value={searchInput}
      />
    </form>
  );
};

export default SearchBar;
