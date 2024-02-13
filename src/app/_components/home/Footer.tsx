"use client";

import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  function HandleRedirect() {
    router.push("/AboutUs");
  }

  return (
    <footer className="absolute bottom-0 flex flex-col space-y-4 justify-center items-center bg-black w-full desktop2k:h-36 desktop1080:h-32 laptop:h-32 tablet:h-28 phone:h-28">
      <div>
        <button
          className="rounded-3xl p-1 w-32 bg-white text-black hover:animate-pulse"
          onClick={HandleRedirect}
        >
          About Us
        </button>
      </div>
      <div className="text-white">
        <p className="font-bold">
          © 2024 All Rights Reserved, Rate My Internship
        </p>
      </div>
    </footer>
  );
};

export default Footer;
