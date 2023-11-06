import Image from "next/image";
import Banners from "../../assets/Blood donation-pana.png";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="  max-w-7xl mx-auto px-4 lg:px-0 mt-20">
      <div className=" lg:grid flex  flex-col-reverse lg:grid-cols-2 grid-cols-1 lg:gap-10  ">
        <div className=" flex items-center">
          <div className=" lg:mt-0 pb-20 lg:pb-0">
            <h3 className=" lg:text-5xl text-4xl text-gray-900">
              Your Blood Can Save Life
            </h3>
            <p className=" text-gray-600 mt-2">
              Blood donation is a selfless act that not only saves lives but
              also benefits the donor. It enhances cardiovascular health,
              triggers new blood cell production, and fosters a sense of unity
              and goodwill in the community, making a positive impact on both
              donor and recipient.
            </p>

            <div className=" flex gap-5 mt-5">
              <Link
                className=" w-36 h-10 flex justify-center items-center rounded bg-[#d1001c] text-white font-medium "
                href="/bloodDonor"
              >
                Find Donor{" "}
              </Link>

              <Link
                href="/doctor/find"
                className="  w-36 h-10 rounded border flex justify-center items-center border-[#d1001c] bg-white font-medium "
              >
                Find Doctor
              </Link>
            </div>
          </div>
        </div>
        <div className="  w-full flex justify-center">
          <Image src={Banners} alt="Banner" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
