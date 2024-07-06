"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  const refreshPage = () => {
    window.location.reload();
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Image src={"/not-found.png"} width={550} height={550} alt="404" />
      <div className="flex items-center justify-evenly mt-5 space-x-3">
        <Button>
          <Link href={'/'}>Go Home Page</Link>
        </Button>
        <Button variant="outline" className="border-[#6200EE] text-[#6200EE]" onClick={refreshPage}>
          Reload Page
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
