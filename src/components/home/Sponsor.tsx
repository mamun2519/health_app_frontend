import React from "react";
import Sponsor1 from "../../assets/sponser.png";
import Sponsor2 from "../../assets/sponser1.jpg";
import Sponsor3 from "../../assets/sponser2.jpg";
import Sponsor4 from "../../assets/sponser3.jpg";
import Sponsor5 from "../../assets/sponser5.png";
import Image from "next/image";
const Sponsor = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 my-40">
      <h3 className=" text-3xl font-bold text-center">Our Sponsor</h3>
      <div className=" grid lg:grid-cols-5 grid-cols-2 gap-5 mt-10">
        <div className=" border w-full h-32  p-1 rounded">
          <Image
            src={Sponsor1}
            width={500}
            height={220}
            alt="pic"
            className="h-full rounded"
          />
        </div>
        <div className=" border w-full h-32  p-1 rounded">
          <Image
            src={Sponsor2}
            width={500}
            height={220}
            alt="pic"
            className="h-full rounded"
          />
        </div>
        <div className=" border w-full h-32  p-1 rounded">
          <Image
            src={Sponsor3}
            width={500}
            height={220}
            alt="pic"
            className="h-full rounded"
          />
        </div>
        <div className=" border w-full h-32  p-1 rounded">
          <Image
            src={Sponsor4}
            width={500}
            height={220}
            alt="pic"
            className="h-full rounded"
          />
        </div>
        <div className=" border w-full h-32  p-1 rounded">
          <Image
            src={Sponsor5}
            width={500}
            height={220}
            alt="pic"
            className="h-full rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
