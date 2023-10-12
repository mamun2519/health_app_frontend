import React from "react";
export interface ISalt {
  time: string;
  booking: boolean;
}
const ServiceSalt = ({ salt }: { salt: ISalt }) => {
  return (
    <div
      key={salt.time}
      className=" h-16 w-full border bg-white flex justify-center items-center rounded shadow"
    >
      <div>
        <p>{salt?.booking == false ? salt.time : "Already book"} </p>

        {/* book */}
      </div>
    </div>
  );
};

export default ServiceSalt;
