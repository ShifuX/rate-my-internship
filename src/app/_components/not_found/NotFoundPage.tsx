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
      <h1 className=" text-6xl pl-28 pt-8">Oops... {searchInput} Not Found</h1>
      <div className="pl-28 pt-20">
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
