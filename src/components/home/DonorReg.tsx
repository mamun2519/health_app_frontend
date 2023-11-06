import Image from "next/image";
import Banners from "../../assets/newDonorReg.svg";
import Link from "next/link";
import { Typography } from "@mui/material";
const DonorReg = () => {
  return (
    <div className="  max-w-7xl mx-auto px-4 lg:px-0 mt-20">
      <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-10 ">
        <div className="  w-full ">
          <Image src={Banners} alt="Banner" className="lg:w-[28vw] w-full" />
        </div>
        <div className=" flex items-center  justify-center border p-5 lg:h-3/4 h-full mt-20 rounded-3xl">
          <div className="mt-5 lg:mt-0">
            <h3 className=" text-3xl font-medium text text-gray-900">
              Are You Ready To Donor Registration ?
            </h3>
            <Typography color="GrayText" className="  mt-2  ">
              Blood donation is a noble act with myriad benefits. Not only does
              it save lives by providing a lifeline to those in need, but it
              also has positive effects on the donor. Donating blood can improve
              the donors cardiovascular health, reducing the risk of heart
              disease. It stimulates the production of new blood cells, which
              can enhance overall well-being. Furthermore, it fosters a sense of
              unity and goodwill in the community, creating a positive ripple
              effect that benefits both the donor and the recipient, making the
              act of giving even more rewarding.Blood donation is a selfless act
              that not only saves lives but also benefits the donor. It enhances
              cardiovascular health, triggers new blood cell production, and
              fosters a sense.
            </Typography>

            <div className=" flex gap-5 mt-5 justify-center">
              <Link
                className=" w-52 h-10 flex justify-center items-center rounded bg-[#d1001c] text-white font-medium "
                href="/bloodDonor/registration"
              >
                Registration Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorReg;
