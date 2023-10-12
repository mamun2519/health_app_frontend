import NoDataPic from "../../assets/nodata.svg";
import Image from "next/image";
const NoData = () => {
  return (
    <div className=" flex justify-center items-center ">
      <Image src={NoDataPic} alt="no data" />
    </div>
  );
};

export default NoData;
