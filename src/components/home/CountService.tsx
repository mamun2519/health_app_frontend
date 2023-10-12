import React from "react";

const CountService = () => {
  const services = [
    {
      title: "Blood Donor",
      total: 500,
    },
    {
      title: "Doctor",
      total: 200,
    },
    {
      title: "Blood Donation",
      total: 300,
    },
    {
      title: "Patient",
      total: 500,
    },
  ];
  return (
    <div className=" mt-3  max-w-7xl mx-auto px-4 lg:px-0 ">
      <div className=" grid lg:grid-cols-4  grid-cols-2 gap-5">
        {services.map((service: { title: string; total: number }) => (
          <div
            key={service.title}
            className=" h-24 border flex justify-center items-center   rounded shadow bg-[#30029010]"
          >
            <div className=" text-center">
              <h3 className=" text-xl text-[#d1001c] font-medium">
                {service.title}
              </h3>
              <p className=" text-gray-900 font-medium ">{service.total}+</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountService;
