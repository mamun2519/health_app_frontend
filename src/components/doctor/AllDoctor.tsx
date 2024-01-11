import { DoctorSpecialists, Limit } from "@/constants/donor";
import Doctor from "./Doctor";
import Select from "react-select";
import RefreshIcon from "@mui/icons-material/Refresh";
const AllDoctor = ({
  doctors,
  specialist,
  setSpecialist,
  setLimit,
  pageLimit,
}: any) => {
  return (
    <div className="  max-w-7xl mx-auto  lg:px-0 my-28 ">
      <div className=" lg:flex justify-between gap-2">
        <h3 className=" text-cent text-3xl font-bold ">Meet Our Doctor</h3>
        <div>
          <div className="flex gap-2 items-center h-full">
            {specialist && (
              <button
                onClick={() => {
                  setSpecialist(null);
                  setLimit(10);
                }}
                className="w-10 bg-base-200 h-full rounded flex  justify-center items-center "
              >
                <RefreshIcon />
              </button>
            )}
            <Select
              className="lg:w-60 w-full mt-2 lg:mt-0"
              defaultValue={specialist}
              placeholder="Filter By Specialist"
              onChange={(event: any) => setSpecialist(event?.value)}
              options={DoctorSpecialists}
            />
            <Select
              className="w-28 mt-2 lg:mt-0"
              placeholder="limit"
              defaultValue={pageLimit}
              onChange={(event: any) => setLimit(event?.value)}
              options={Limit}
            />
          </div>
        </div>
      </div>

      <div className=" grid lg:grid-cols-4  grid-cols-1 mt-6 gap-5">
        {doctors?.map((doctor: any) => (
          <Doctor key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};
export default AllDoctor;
