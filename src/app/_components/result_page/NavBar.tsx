import { Logo, SearchBar } from "..";

const NavBar = () => {
  return (
    <div className="bg-black w-screen h-16">
      <div className="pl-10 pt-3 flex space-x-6">
        <div className="relative w-24 h-10 mr-96">
          <Logo />
        </div>
        <div className=" text-white text-3xl font-bold">Company</div>
        <SearchBar location="nav" />
      </div>
    </div>
  );
};

export default NavBar;
