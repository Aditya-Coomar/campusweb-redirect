"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "https://campusweb-iota.web.app/";
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <img
        src="/logo2.svg"
        alt="CampusWeb"
        className="w-[290px] h-auto animate-fade-in"
      />
    </div>
  );
}
