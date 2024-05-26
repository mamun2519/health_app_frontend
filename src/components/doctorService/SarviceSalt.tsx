import React from "react";
export interface ISalt {
  time: string;
  booking: boolean;
}
const ServiceSalt = ({
  salt,
  SlatBookingHandler,
  selectSlat,
}: {
  salt: ISalt;
  selectSlat: ISalt | null;
  SlatBookingHandler: any;
}) => {
  return (
    <div
      onClick={() => SlatBookingHandler(salt)}
      key={salt.time}
      className={` ${
        salt.time == selectSlat?.time ? "bg-red-500 text-white" : "bg-white"
      } h-16 w-full border  flex justify-center   pt-4 rounded shadow relative   cursor-pointer`}
    >
      <div>
        <p>{salt.time}</p>

        {/* book */}
        <div
          className={`${
            salt.time == selectSlat?.time ? "" : ""
          } bg-red-500 text-white px-2 text-center rounded-full  absolute  w-20 top-12`}
        >
          <span>{salt?.booking == false ? "Available" : "booked"} </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceSalt;
