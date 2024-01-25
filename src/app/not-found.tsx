import React from "react";
import NotFound from "@/assets/notfound.svg";
import Image from "next/image";
const NotFoundPage = () => {
  return (
    <div className="w-full  h-screen flex justify-center items-center">
      <Image src={NotFound} height={500} width={500} alt="not found page" />
    </div>
  );
};

export default NotFoundPage;
