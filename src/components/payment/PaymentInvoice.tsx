import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import { convertDate } from "@/helper/date";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface PaymentInvoiceProps {
  bread: {
    link: string;
    level: string;
    icons: React.ReactNode | React.ReactElement;
    color: string;
  }[];
  invoice: any;
}
const downloadInvoice = () => {
  const invoiceContent = document.getElementById("invoice");

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

const PaymentInvoice = ({ invoice, bread }: PaymentInvoiceProps) => {
  return (
    <div className="">
      {/* <h3 className=" mt-5 text-2xl">My Payment Details</h3> */}
      <div className="h-full lg:w-full w-80  border  p-5 rounded-3xl shadow-sm  mt-3 lg:flex justify-between items-center">
        <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
        <button
          onClick={() => downloadInvoice()}
          className="text-white bg-[#d1001c] px-6 py-2 rounded-full mt-2 lg:mt-0"
        >
          Download
        </button>
      </div>
      <div
        id="invoice"
        className=" h-full    w-full m-auto border mt-5 mb-20 shadow rounded"
      >
        <div className="h-12 bg-red-400"></div>
        <div className="lg:p-10 p-4">
          <div className=" lg:flex justify-between items-center">
            <div>
              <h3 className=" uppercase text-4xl font-bold">invoice</h3>
              <div className="bg-[#30029010] h-1  mt-2  w-64 "></div>
              <div className="  w-64">
                <div className="  flex justify-between  mt-2">
                  <span>Invoice No</span>
                  <span>{invoice?.transactionId}</span>
                </div>
                <div className=" flex justify-between  mt-3">
                  <span>Invoice Date</span>
                  <span>{convertDate(invoice?.createdAt)}</span>
                </div>
              </div>
              <div className="bg-[#30029010] h-1  mt-2  w-64 "></div>
            </div>
            <div className=" lg:flex  justify-end mt-5 lg:mt-0">
              <div>
                <h3 className=" text-2xl font-bold">health Care App</h3>
                <p className="mt- text-x lg:flex  justify-end">
                  Chittagong, Bangladesh
                </p>
                <p className="mt-1 text-x lg:flex  justify-end">01860700702</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className=" flex  justify-between grid-cols-2  mt-2">
              <span>Name</span>
              <span>
                {" "}
                {invoice?.user?.profile?.first_name}{" "}
                {invoice?.user?.profile?.last_name}
              </span>
            </div>
            <div className=" flex  justify-between  grid-cols-2  mt-2">
              <span>Phone</span>
              <span> {invoice?.user?.profile?.phone}</span>
            </div>
            <div className=" flex  justify-between  grid-cols-2  mt-2">
              <span>Order Id</span>
              <span>93743979834</span>
            </div>
            <div className=" flex  justify-between  grid-cols-2  mt-2">
              <span>order Date</span>
              <span>{convertDate(invoice?.createdAt)}</span>
            </div>
            <div className=" flex  justify-between  grid-cols-2  mt-2">
              <span>Address</span>
              <span>Chittgong</span>
            </div>
          </div>
          <div className="mt-10">
            <div className=" lg:h-10 h-16  bg-[#30029010] rounded-full ">
              <div className=" lg:h-10  h-16 flex justify-between items-center px-4 font-bold">
                <p>Payment Type</p>
                <p>Payment Info</p>
              </div>
            </div>
          </div>
          <div className="mt-1">
            <div className=" ">
              <div className=" h-10 flex justify-between items-center px-4 ">
                <p>{invoice?.paymentType}</p>
                <p>01860700702</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className=" lg:h-10 h-16 bg-[#30029010] rounded-full ">
              <div className=" lg:h-10 h-16 flex justify-between items-center px-4 font-bold">
                <p>Appointment Name</p>
                <p>Price</p>
              </div>
            </div>
          </div>
          <div className="mt-1">
            <div className=" ">
              <div className=" h-10 flex justify-between items-center px-4 ">
                <p>{invoice?.service?.title}</p>

                <p>{invoice?.service?.price} BDT</p>
              </div>
            </div>
            <div className="mt-1">
              <div className=" lg:grid grid-cols-2">
                <div></div>
                <div>
                  <div className="bg-[#30029010] h-1"></div>
                  <div className="px-4 mt-1 ">
                    <div className=" flex justify-between">
                      <p>Discount</p>
                      <p> {invoice?.discountedPrice} BDT</p>
                    </div>
                    <div className=" flex justify-between mt-1">
                      <p>Total</p>
                      <p> {invoice?.price} BDT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10   lg:grid grid-cols-2 gap-10">
            <div>
              <h3>Treams And Condition</h3>
              <p>No Change Many</p>
            </div>
            <div className=" text-center mt-8">
              <p>Signature</p>
            </div>
          </div>
        </div>

        <div className="h-12 bg-red-400"></div>
      </div>
    </div>
  );
};

export default PaymentInvoice;
