"use client";
import Footer from "@/components/shared/Footer";
import Banner from "@/components/home/Banner";
import ContactUs from "@/components/home/Contect";
import CountService from "@/components/home/CountService";

import DonorReg from "@/components/home/DonorReg";
import Donors from "@/components/bloodDonor/Donors";
import { URL } from "@/constants/common";
import Doctors from "@/components/doctor/Doctors";
import YouTube, { Media } from "@/components/ui/Skeleton";
import { Category } from "@mui/icons-material";
import ServiceCategory from "@/components/ui/Category";
import ServiceCategorys from "@/components/ui/Category";
import Review from "@/components/home/Review";
import UpComingService from "@/components/home/UpComingService";
import Sponsor from "@/components/home/Sponsor";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  // const res = await fetch(`${URL}/blood-donor/all-donor`, {
  //   next: { revalidate: 500 },
  //   cache: "force-cache",
  // });
  // const donor = await res.json();
  // // console.log(data);
  // const doctorRes = await fetch(`${URL}/doctor-service/all-doctor`, {
  //   cache: "force-cache",
  //   next: { revalidate: 500 },
  // });
  // const doctor = await doctorRes.json();
  const router = useRouter();

  useEffect(() => {
    // Redirect to /home when the component mounts
    router.push("/home");
  }, []);
  return (
    <div>
      {/* <Banner />

      <CountService />
      <DonorReg />
      <ServiceCategorys />

      <Doctors doctors={doctor.data.slice(0, 4)} />
      <Donors data={donor?.data.slice(0, 4)} />
      <Review />
      <UpComingService />
      <Sponsor />
      <ContactUs />
      <Footer /> */}
    </div>
  );
}
