import Image from "next/image";
import Banners from "../../assets/Blood donation-pana.png";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="  max-w-7xl mx-auto px-4 lg:px-0">
      <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-10 ">
        <div className=" flex items-center">
          <div>
            <h3 className=" text-5xl font- text-gray-900">
              Your Blood Can Save Life
            </h3>
            <p className=" text-gray-600 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              mollitia optio placeat cupiditate! Et voluptatum nulla veniam hic
              iusto incidunt earum perferendis architecto adipisci, tenetur
              illum repellendus, saepe sint facere. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eaque, ipsa.
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
