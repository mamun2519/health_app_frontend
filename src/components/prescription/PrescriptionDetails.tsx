"use client";

import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import { usePrescriptionDetailsQuery } from "@/redux/api/prescriptionApi";
import { IMedicine, IReport } from "@/types";
import { convertDate } from "@/helper/date";
import LoadingSpinner from "@/utils/Loading";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface PrescriptionProps {
  bread: {
    link: string;
    level: string;
    icons: React.ReactNode | React.ReactElement;
    color: string;
  }[];
  id: string;
}
const PrescriptionDetails = ({ bread, id }: PrescriptionProps) => {
  const { data, isLoading } = usePrescriptionDetailsQuery(id);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  const downloadIPrescription = () => {
    const invoiceContent = document.getElementById("prescription");

    if (invoiceContent) {
      html2canvas(invoiceContent).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        // Create a new jsPDF instance
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });

        // Add the image (the HTML content converted to an image) to the PDF
        pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // A4 size: 210mm x 297mm

        // Save the PDF with a specific name (e.g., "invoice.pdf")
        pdf.save("invoice.pdf");
      });
    } else {
      console.error("Element with ID 'invoiceContent' not found.");
    }
  };
  return (
    <div>
      <div className="h-full lg:w-full w-80  border  p-5 rounded-3xl shadow-sm  mt-3 lg:flex justify-between items-center">
        <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
        <button
          onClick={() => downloadIPrescription()}
          className="text-white bg-[#d1001c] px-6 py-2 rounded-full mt-2 lg:mt-0"
        >
          Download Prescription
        </button>
      </div>

      <div
        id="prescription"
        className=" h-full lg:w-full w-80 m-auto border mt-5 mb-20 shadow rounded"
      >
        <div className="lg:h-40 h-48 bg-red-400 text-white ">
          <div className=" lg:flex  justify-end items-center lg:mt-0 p-10">
            <div>
              <h3 className=" text-3xl font-bold uppercase">health Care app</h3>
              <p className="mt- text-x lg:flex  justify-end uppercase">
                Chittagong, Bangladesh
              </p>
              <p className="mt-1 text-x lg:flex  justify-end">01860700702</p>
            </div>
          </div>
        </div>
        <div className="lg:p-10 p-4">
          <div className=" lg:flex justify-between items-center">
            <div>
              <h3 className=" uppercase lg:text-3xl text-2xl font-bold">
                Doctor Prescription
              </h3>
              <div className="bg-[#30029010] h-1  mt-2  w-64 "></div>
              <div className="  w-64">
                <div className="  flex justify-between  mt-2">
                  <span>Prescription No</span>
                  <span>#0394309</span>
                </div>
                <div className=" flex justify-between  mt-3">
                  <span>Date</span>
                  <span>{convertDate(data?.createdAt)}</span>
                </div>
              </div>
              <div className="bg-[#30029010] h-1  mt-2  w-64 "></div>
            </div>
          </div>
          <div className=" grid lg:grid-cols-2 grid-cols-1  lg:gap-20">
            <div className="mt-10">
              <h3 className="text-2xl text-red-500">Doctor Information</h3>
              <div className=" grid  grid-cols-2  mt-2">
                <span>Name</span>
                <span>
                  {" "}
                  Dr, {data?.doctor?.user?.profile?.first_name}{" "}
                  {data?.doctor?.user?.profile?.last_name}
                </span>
              </div>
              <div className=" grid    grid-cols-2  mt-2">
                <span>Degree</span>
                <span> {data?.doctor?.degree}</span>
              </div>
              <div className=" grid  j  grid-cols-2  mt-2">
                <span>specialist</span>
                <span>{data?.doctor?.specialist}</span>
              </div>
              <div className=" grid    grid-cols-2  mt-2">
                <span>Phone</span>
                <span> {data?.doctor?.user?.profile?.phone}</span>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl text-red-500">Patient Information</h3>
              <div className=" grid    grid-cols-2   mt-2">
                <span>Name</span>
                <span>
                  {" "}
                  {data?.user?.profile?.first_name}{" "}
                  {data?.user?.profile?.last_name}
                </span>
              </div>
              <div className="grid    grid-cols-2   mt-2">
                <span>Age</span>
                <span> {data?.appointment?.age}</span>
              </div>
              <div className=" grid    grid-cols-2   mt-2">
                <span>Patient Problem</span>
                <span>{data?.appointment?.patientProblem}</span>
              </div>
              <div className="grid    grid-cols-2   mt-2">
                <span>Phone</span>
                <span> {data?.doctor?.profile?.phone}</span>
              </div>
            </div>
          </div>
          {/* Medince  */}
          <div className="mt-10">
            <h3 className="text-2xl text-red-500">Medicine Details</h3>
            <div className=" lg:h-12 h-16  bg-[#30029010] rounded-full  mt-3">
              <div className=" lg:h-12  h-16 flex   items-center px-4 font-bold">
                <div className=" w-96">
                  <p>durg Name</p>
                </div>
                <div className=" w-96">
                  <p>eating Time</p>
                </div>
                <div className=" w-96">
                  <p>Duration</p>
                </div>
                <div className=" w-96">
                  {" "}
                  <p>Eat</p>
                </div>
              </div>
            </div>
          </div>
          {data?.medicines?.map((medicine: IMedicine) => (
            <div key={medicine.id} className="mt-1">
              <div className=" ">
                <div className=" h-10 flex  items-center px-4 ">
                  <div className=" w-96">
                    <p>{medicine?.durgName}</p>
                  </div>
                  <div className=" w-96">
                    <p>{medicine?.eatingTime.map((time) => time)}</p>
                  </div>
                  <div className=" w-96">
                    <p>{medicine?.duration}</p>
                  </div>
                  <div className=" w-96">
                    {" "}
                    <p>{medicine?.eat}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* report  */}
          <div className="mt-10">
            <h3 className="text-2xl text-red-500">Report Test</h3>
            <div className=" lg:h-12 h-16  bg-[#30029010] rounded-full  mt-3">
              <div className=" lg:h-12  h-16 flex   items-center px-4 font-bold">
                <div className=" w-1/2">
                  <p>Test Name</p>
                </div>
                <div className=" w-1/2">
                  <p>Description</p>
                </div>
              </div>
            </div>
          </div>
          {data?.healtReports.map((report: IReport) => (
            <div key={report?.id} className="mt-1">
              <div className=" ">
                <div className=" h-10 flex  items-center px-4 ">
                  <div className=" w-1/2">
                    <p>{report?.testName}</p>
                  </div>
                  <div className=" w-1/2">
                    <p>{report?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-10    ">
            <p>
              <span className=" pr-8 text-xl">Doctor Advice</span>:{" "}
              {data?.advice}
            </p>
          </div>
        </div>

        <div className="h-12 bg-red-400"></div>
      </div>
    </div>
  );
};

export default PrescriptionDetails;
