import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

interface MediaProps {
  loading?: boolean;
}

export function Media(props: MediaProps) {
  const { loading = false } = props;

  return (
    <div className=" grid grid-cols-2 max-w-7xl mx-auto px-4 lg:px-0">
      {/* <div>
        <Skeleton
          variant="rectangular"
          // style={{ borderRadius: "500px" }}
          width={510}
          height={118}
        />

        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="50%" />
        </Box>
      </div> */}

      <div className=" w-[600px] h-52  flex gap-5  border shadow  rounded bg-[#30029010] mt-5">
        <div className="w-[230px] flex justify-center      ">
          <div className="w-full h-full  ">
            <Skeleton
              variant="rectangular"
              // style={{ borderRadius: "500px" }}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
        <div className=" ">
          {/* <div className=" w-full  border-2 border-[#d1001c] mt-1"></div> */}
          <div className=" w-full  py-2 mt-3">
            <div className=" flex  ">
              <span className=" w-56">
                {" "}
                <Skeleton width="40%" />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton width="60%" />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton width="20%" />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton width="70%" />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton width="80%" />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton width="20%" />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton width="60%" />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton width="20%" />
              </span>
            </div>
            {/* <div className=" px-2 mt-1 flex justify-start">
            <Link
              className=" w-36 h-8 flex justify-center rounded items-center bg-[#d1001c] text-white font-bold "
              href={`/doctor/service/${service?.id}`}
            >
              More Details
            </Link>
          </div> */}
          </div>
        </div>
      </div>
      <div className=" w-[600px] h-52  flex gap-5  border shadow  rounded bg-[#30029010] mt-5">
        <div className="w-[230px] flex justify-center      ">
          <div className="w-full h-full  ">
            <Skeleton
              variant="rectangular"
              // style={{ borderRadius: "500px" }}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
        <div className=" ">
          {/* <div className=" w-full  border-2 border-[#d1001c] mt-1"></div> */}
          <div className=" w-full  py-2 mt-3">
            <div className=" flex  ">
              <span className=" w-56">
                {" "}
                <Skeleton width="40%" />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton width="60%" />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton width="20%" />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton width="70%" />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton width="80%" />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton width="20%" />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton width="60%" />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton width="20%" />
              </span>
            </div>
            {/* <div className=" px-2 mt-1 flex justify-start">
            <Link
              className=" w-36 h-8 flex justify-center rounded items-center bg-[#d1001c] text-white font-bold "
              href={`/doctor/service/${service?.id}`}
            >
              More Details
            </Link>
          </div> */}
          </div>
        </div>
      </div>
      <div className=" w-[600px] h-52  flex gap-5  border shadow  rounded bg-[#30029010] mt-5">
        <div className="w-[230px] flex justify-center      ">
          <div className="w-full h-full  ">
            <Skeleton
              variant="rectangular"
              // style={{ borderRadius: "500px" }}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
        <div className=" ">
          {/* <div className=" w-full  border-2 border-[#d1001c] mt-1"></div> */}
          <div className=" w-full  py-2 mt-3">
            <div className=" flex  ">
              <span className=" w-56">
                {" "}
                <Skeleton width="40%" />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton width="60%" />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton width="20%" />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton width="70%" />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton width="80%" />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton width="20%" />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton width="60%" />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton width="20%" />
              </span>
            </div>
            {/* <div className=" px-2 mt-1 flex justify-start">
            <Link
              className=" w-36 h-8 flex justify-center rounded items-center bg-[#d1001c] text-white font-bold "
              href={`/doctor/service/${service?.id}`}
            >
              More Details
            </Link>
          </div> */}
          </div>
        </div>
      </div>
      <div className=" w-[600px] h-52  flex gap-5  border shadow  rounded bg-[#30029010] mt-5">
        <div className="w-[230px] flex justify-center      ">
          <div className="w-full h-full  ">
            <Skeleton
              variant="rectangular"
              // style={{ borderRadius: "500px" }}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
        <div className=" ">
          {/* <div className=" w-full  border-2 border-[#d1001c] mt-1"></div> */}
          <div className=" w-full  py-2 mt-3">
            <div className=" flex  ">
              <span className=" w-56">
                {" "}
                <Skeleton width="40%" />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton width="60%" />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton width="20%" />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton width="70%" />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton width="80%" />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton width="20%" />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton width="60%" />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton />
              </span>
            </div>
            <div className=" flex mt-1">
              <span className=" w-56">
                {" "}
                <Skeleton />
              </span>
              <span className=" text-gray-700 font-medium w-full ">
                <Skeleton width="20%" />
              </span>
            </div>
            {/* <div className=" px-2 mt-1 flex justify-start">
            <Link
              className=" w-36 h-8 flex justify-center rounded items-center bg-[#d1001c] text-white font-bold "
              href={`/doctor/service/${service?.id}`}
            >
              More Details
            </Link>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoadingSkeleton() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading />
      {/* <Media /> */}
    </Box>
  );
}
