import { Days, ServiceCategory, Duration } from "@/constants/donor";
import Link from "next/link";
import { useState } from "react";
import Select from "react-select";

const SelectService = () => {
  const [category, setCategory] = useState(null);
  const [day, setDay] = useState(null);
  const [duration, setDuration] = useState(null);
  return (
    <div>
      <div className="mt-8">
        <label>Select Category</label>
        <Select
          className="w-96"
          defaultValue={category}
          onChange={(event: any) => setCategory(event?.value)}
          options={ServiceCategory}
        />
      </div>
      <div className="mt-3">
        <label>Service Days</label>
        <Select
          className="w-96"
          defaultValue={day}
          onChange={(event: any) => setDay(event?.value)}
          options={Days}
        />
      </div>
      <div className="mt-3">
        <label>Duration</label>
        <Select
          className="w-96"
          defaultValue={duration}
          onChange={(event: any) => setDuration(event?.value)}
          options={Duration}
        />
      </div>

      <div className=" flex items-end h-28 justify-start">
        <Link
          href={`/doctor/find/service?category=${category}&day=${day}&duration=${duration}`}
          type="submit"
          className=" w-36 h-10 border rounded bg-[#d1001c] text-white flex justify-center items-center"
        >
          Search Service
        </Link>
      </div>
    </div>
  );
};

export default SelectService;
