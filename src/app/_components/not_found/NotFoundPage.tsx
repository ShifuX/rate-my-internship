"use client";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  const HandleClick = () => {
    router.push("/request");
  };

  return (
    <div>
      <h1 className=" text-6xl pl-28 pt-8">Oops... Page Not Found</h1>
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
