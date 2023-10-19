import LoadingImage from "../assets/Spinner-1s-200px.gif";
import Image from "next/image";
const LoadingSpinner = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <Image src={LoadingImage} alt="pic" />
    </div>
  );
};

export default LoadingSpinner;
