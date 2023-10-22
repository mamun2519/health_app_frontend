import React from "react";
import LoadingImage from "../assets/lofing.gif";
import Image from "next/image";
const Loading = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <Image src={LoadingImage} alt="pic" />
    </div>
  );
};

export default Loading;
