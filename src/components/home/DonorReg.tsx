import Image from "next/image";
import Banners from "../../assets/Forms-cuate.png";
import Link from "next/link";
const DonorReg = () => {
  return (
    <div className="  max-w-7xl mx-auto px-4 lg:px-0 mt-20">
      <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-10 ">
        <div className="  w-full ">
          <Image src={Banners} alt="Banner" className="lg:w-[28vw] w-full" />
        </div>
        <div className=" flex items-center ">
          <div className=" ">
            <h3 className=" text-3xl font-medium text-gray-900">
              Are You Ready To Donor Registration ?
            </h3>
            <p className=" text-gray-600 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              mollitia optio placeat cupiditate! Et voluptatum nulla veniam hic
              iusto incidunt earum perferendis architecto adipisci, tenetur
              illum repellendus, saepe sint facere. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Maiores, rem? Odio, eius quos esse
              dolorem repellendus mollitia laboriosam cum. Nihil repudiandae
              accusamus accusantium autem quisquam maiores nesciunt numquam
              porro deleniti!
            </p>

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
