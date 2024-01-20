"use client";
import { signIn } from "next-auth/react";

const page = () => {
  return (
    <div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default page;
