import React from "react";
import Download from "../../assets/dowenload.png";
import AppStore from "../../assets/appStore.png";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PaymentBDT from "../../assets/payment.jpg";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const Footer = () => {
  return (
    <div className="lg:h-[560px] h-full w-full   mt-10 bg-[#2A2036] text-white">
      <div className=" max-w-7xl mx-auto  lg:px-0  grid lg:grid-cols-4 grid-cols-1  lg:gap-10  gap-4 pt-5 px-4">
        <div className="mt-10">
          <h3 className="text-xl font-bold">Company Details</h3>
          <p className="mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, at.
          </p>
          <div className="mt-20">
            <h3 className="text-xl font-bold">Download App</h3>
            <div className=" flex gap-2">
              <div className="bg-white border w-36 rounded-full mt-1 shadow-sm">
                <Image
                  src={Download}
                  alt="play Store"
                  width={500}
                  height={200}
                  className="h-14  w-36 rounded-full"
                />
              </div>
              <div className="bg-white border w-36 rounded-full mt-1">
                <Image
                  src={AppStore}
                  alt="play Store"
                  width={500}
                  height={200}
                  className="h-14  w-36 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-bold">Services</h3>
          <p className="mt-1">Primary Care Services</p>
          <p className="mt-1">Specialty Medical Services</p>
          <p className="mt-1">Surgical Services</p>
          <p className="mt-1">Diagnostic Services</p>

          <p className="mt-1">Medicine Services</p>
          <p className="mt-1">Health Services</p>
          <p className="mt-1">Mental Health Services</p>
          <p className="mt-1">Cancer Care Services</p>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-bold">Useful Link</h3>

          <p className="mt-1">Profile</p>
          <p className="mt-1">Home</p>
          <p className="mt-1">Blood Donar</p>
          <p className="mt-1">Doctor </p>
          <p className="mt-1">Service </p>
          <p className="mt-1">Dashboard </p>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-bold">Contact</h3>

          <p className="mt-1">
            <span>
              <AddLocationAltIcon />
            </span>{" "}
            Ice Factory Road, Chittagong, Bangladesh
          </p>
          <p className="mt-1">
            <span>
              <MarkunreadIcon />
            </span>{" "}
            healthCare2@gmail.com
          </p>
          <p className="mt-1">
            <span>
              <LocalPhoneIcon />
            </span>{" "}
            +01860700702
          </p>
          <p className="mt-1">
            <span>
              <LocalPhoneIcon />
            </span>{" "}
            +018235673
          </p>

          <div className="mt-10">
            <h3 className="text-xl font-bold">Payment Method</h3>
            <div className="bg-white border w-full  mt-1 shadow-sm rounded">
              <Image
                src={PaymentBDT}
                alt="play Store"
                width={500}
                height={200}
                className="h-28  w-full  rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-1 bg-white w-full mt-10"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2  grid-cols-1  gpy-5 lg:px-0 p-4 ">
        <div>
          <p>All Copyright Reserved Health Care App</p>
        </div>

        <div className=" lg:flex   items-center gap-5  ">
          <h3>Company Social Link </h3>
          <div className=" flex gap-2">
            <FacebookIcon style={{ fontSize: "35px" }} />
            <TwitterIcon style={{ fontSize: "35px" }} />
            <LinkedInIcon style={{ fontSize: "35px" }} />
            <InstagramIcon style={{ fontSize: "35px" }} />
            <YouTubeIcon style={{ fontSize: "35px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
