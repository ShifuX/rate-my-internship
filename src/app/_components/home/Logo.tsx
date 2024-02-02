"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  function RedirectHome() {
    router.push("/");
  }

  return (
    <div>
      <Image
        src="/RMI_logo_snip.JPG"
        alt="Rate My Internship Logo"
        fill={true}
        onClick={RedirectHome}
      />
    </div>
  );
};

export default Logo;
