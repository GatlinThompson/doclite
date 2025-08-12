"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <button
        className="bg-white text-black rounded-lg p-4"
        onClick={() => {
          signIn("github");
        }}
      >
        Sign in to Github
      </button>
    </div>
  );
}
