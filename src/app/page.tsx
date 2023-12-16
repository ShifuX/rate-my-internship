import { SearchBar } from "./_components";

export default function Home() {
  return (
    <>
      <div className=" text-center pt-80">
        <div className="text-3xl text-center font-bold pb-20">
          <h2>Enter your company to get started</h2>
        </div>
        <SearchBar />
      </div>
    </>
  );
}
