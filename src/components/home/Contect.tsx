"use client";
import React from "react";
import Question from "../../assets/question.svg";
import Image from "next/image";
import FormInput from "../Form/FormInput";
import Form from "../Form/FormProvider";
import BasicAccordion from "../ui/Accordion";
const ContactUs = () => {
  const handlerFunction = () => {};
  return (
    <div className="  max-w-7xl mx-auto px-4 lg:px-0 my-40 ">
      <h3 className=" text-center text-3xl  font-bold">
        Your Inquiry About Us
      </h3>
      <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-10  ">
        <div className="  w-full  flex  items-center mt-10">
          <Image src={Question} alt="Banner" className="lg:w-[30vw] w-full" />
        </div>
        {/* <Form submitHandler={handlerFunction}>
          <div className=" border w-full h-[430px] mt-20  p-5 bg-[#30029010]">
            <div></div>

            <div className="   flex gap-5 w-full mt-5">
              <div className=" w-full bg-white">
                <FormInput
                  name="firstName"
                  label="First Name"
                  placeholder="Enter Your First Name"
                />
              </div>
              <div className=" w-full bg-white">
                <FormInput
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter Your Last Name"
                />
              </div>
            </div>

            <div className=" w-full mt-5 bg-white">
              <FormInput
                name="email"
                label="Email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className=" w-full mt-5">
              <textarea
                className=" text-gray-900 border h-40 w-full rounded-xl p-2  outline-blue-400"
                placeholder="Enter Something"
              />
            </div>
            <div className=" flex justify-center">
              <button
                type="submit"
                className="  w-48 h-10 rounded border bg-[#d1001c] text-white font-bold    mt-2 "
              >
                Send Now
              </button>
            </div>
          </div>
        </Form> */}

        <div className="mt-20 border p-5 rounded-xl glass flex  items-center">
          <div>
            <BasicAccordion
              name="How to open doctor account?"
              message=" to get a doctor account, send your name, address, your medical degree and certificate to this juborajislam46@gmail.com. We will send your account email password in reply mail."
            />
            <BasicAccordion
              name="How to open Blood Donor account?"
              message="You can easily get a donor account by clicking on the  donor button at the top and entering the donor information."
            />
            <BasicAccordion
              name="how To send blood request to the donor?"
              message="You can request a donor by going to the donor details page and clicking on the donor request button , giving the information about the blood quantity, address etc."
            />
            <BasicAccordion
              name="How to review the donor or doctor?"
              message=" If the blood donor request is accepted, after the donation is completem you will get the button called review after giving the request status complete. The you can give a review very easily. Similarly, after talking to the doctor on google meet, you can give a review on the service."
            />
            <BasicAccordion
              name="How do i book an appointment?"
              message=" You can book an appointment very easily by going to the service page, searching for your service, going to the details page of that service and selection the appointment date and schedule."
            />
            <BasicAccordion
              name="How to payment?"
              message="  After booking the appointment date and schedule , you can go to the next page and make the payment through stripe payment gateway very easily with the patient information."
            />
            <BasicAccordion
              name="How to Withdraw?"
              message="  This Service is for doctors only. In case of doctors service booking the total balance of those service bookings will be shown on the doctors dashboard. then the doctor will request the admin to draw information"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
