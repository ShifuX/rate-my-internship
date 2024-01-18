import { SearchBar } from "..";

const NavBar = () => {
  return (
    <div className="bg-black w-screen h-16">
      <div className="pl-96 pt-3 flex space-x-6">
        <div className=" text-white text-3xl font-bold">Company</div>
        <SearchBar location="nav" />
      </div>
    </div>
  );
};

export default NavBar;
