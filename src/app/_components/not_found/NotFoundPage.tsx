"use client";
import { useRouter } from "next/navigation";

interface NotFoundI {
  searchInput: string;
}

const NotFoundPage = ({ searchInput }: NotFoundI) => {
  const router = useRouter();

  const HandleClick = () => {
    router.push("/request");
  };

  return (
    <div>
      <div className="pl-28 pt-8">
        <h1 className=" text-6xl">Oops... "{searchInput}" Not Found</h1>
        <p className="pt-8 text-lg">
          To request the company to be added, please click on the button below.
        </p>
      </div>
      <div className="pl-28 pt-16">
        <button
          className="bg-blue-500 w-44 h-14 rounded-3xl text-lg font-bold text-white hover:bg-blue-700"
          onClick={HandleClick}
        >
          Request Company
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
