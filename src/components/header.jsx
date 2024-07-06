import React from "react";
import Image from "next/image";
import { HiSearch } from "react-icons/hi";
import { Input } from "antd";
import { Button } from "./ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full h-[100px] flex items-center justify-between px-20 py-3 max-md:flex-col max-md:gap-y-4 max-md:px-0">
      <div className="flex items-center justify-center space-x-5">
        <Image
          src={"/logo.png"}
          width={150}
          height={100}
          alt="Logo of the company"
        />
        <label
          htmlFor="search"
          className="flex items-center justify-center relative group"
        >
          <span className="absolute top-auto left-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 19L14.65 14.65M9 4C11.7614 4 14 6.23858 14 9M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                stroke="#FEFEFE"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="z-20 group-hover:stroke-gray-600 transition-all"
              />
            </svg>
          </span>

          <Input
            className="text-gray-600 bg-transparent border-none placeholder-gray-500 px-10 -translate-x-3 py-2 relative hover:bg-none text-sm -z-10"
            placeholder="Search for the books"
            id="search"
          />
        </label>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <Button className="text-white">
          <Link href={"/sign-in"}>Sign In</Link>
        </Button>
        <Button className="border-[#6200EE] text-[#6200EE]" variant="outline">
          <Link href={"/sign-up"}>Create Account</Link>
        </Button>
      </div>
    </header>
  );
};
