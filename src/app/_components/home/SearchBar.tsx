"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  let [searchInput, setSearchInput] = useState("");

  function SearchForCompany(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    //console.log(searchInput);
    router.push(`/resultpage/${searchInput}`);
  }

  return (
    <div className=" flex justify-center">
      <form onSubmit={SearchForCompany}>
        <input
          type="search"
          name="searchCompany"
          id="searchCompany"
          placeholder="Company Name"
          className=" bg-white text-xl font-sarif text-black rounded-3xl h-12 w-96 text-center bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url('/terminal-icon.png')`,
          }}
          onChange={(e) => setSearchInput(e.currentTarget.value)}
          value={searchInput}
        />
      </form>
    </div>
  );
};

export default SearchBar;
