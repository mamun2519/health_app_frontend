"use client";
import React from "react";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {
  useDeleteNotificationMutation,
  useMyNotificationQuery,
} from "@/redux/api/notificationApi";
import LoadingSpinner from "@/utils/Loading";
import { InputLabel, MenuItem } from "@mui/material";
import moment from "moment";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import successMessage from "../shared/SuccessMassage";
import errorMessage from "../shared/ErrrorMessage";
const AllNotification = () => {
  const [deleteNotification] = useDeleteNotificationMutation();
  const { data, isLoading } = useMyNotificationQuery({ limit: 100, page: 1 });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const notificationDeleteHandler = async (id: string) => {
    try {
      const res = await deleteNotification(id).unwrap();
      if (res) {
        successMessage({
          header: "Thank You",
          message: "Notification Delete Successfully",
        });
      } else {
        errorMessage({ message: "Something Is worng" });
      }
    } catch (error: any) {
      errorMessage({ message: error?.data });
    }
  };
  return (
    <div className=" p-5">
      <div className=" flex  justify-between">
        <p className="text-xl">My Notification</p>
      </div>

      <div className="w-full mt-5">
        {data?.map(
          (notification: {
            message: string;
            id: string;
            createdAt: string;
          }) => (
            <div key={notification.id}>
              {/* <Avatar /> Profile */}
              <div
                className={`h-24  bg-[#30029010] w-full px-4 mt-1 flex  items-center  rounded-xl shadow-sm  justify-between   hover:bg-[#d1001c] hover:text-white`}
              >
                <div className="">
                  <p id="demo-customized-select-label ">
                    {notification?.message}
                  </p>
                  <div className="mt-2">
                    <span
                      className={` hover:text-white`}
                      id="demo-customized-select-label"
                    >
                      {moment(notification.createdAt).startOf("hour").fromNow()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => notificationDeleteHandler(notification?.id)}
                  className=" cursor-pointer"
                >
                  <DeleteOutlineIcon />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AllNotification;
