import React from "react";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MedicationIcon from "@mui/icons-material/Medication";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
// import VerifiedIcon from "@mui/icons-material/Verified";
const CountService = () => {
  const services = [
    {
      title: "Blood Donor",
      total: 500,
      icons: <VolunteerActivismIcon style={{ fontSize: "30px" }} />,
    },
    {
      title: "Doctor",
      total: 200,
      icons: <MedicationIcon style={{ fontSize: "30px" }} />,
    },
    {
      title: "Blood Donation",
      total: 300,
      icons: <CheckCircleOutlineIcon style={{ fontSize: "30px" }} />,
    },
    {
      title: "Patient",
      total: 500,
      icons: <AirlineSeatReclineExtraIcon style={{ fontSize: "30px" }} />,
    },
  ];
  return (
    <div className=" mt-3  max-w-7xl mx-auto px-4 lg:px-0 ">
      <div className=" grid lg:grid-cols-4  grid-cols-2 gap-5">
        {services.map(
          (service: {
            title: string;
            total: number;
            icons: React.ReactNode;
          }) => (
            <div
              key={service.title}
              className=" h-28 border rounded shadow bg-[#30029010] px-8"
            >
              <div className="flex items-center justify-center h-full ">
                <div className=" text-center">
                  <div className="text-2xl text-[#d1001c]">
                    <span>{service.icons}</span>
                  </div>
                  <h3 className=" text-xl  font-medium">{service.title}</h3>
                  <p className=" text-gray-900 font-medium ">
                    {service.total}+
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CountService;
