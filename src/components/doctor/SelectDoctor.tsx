import {
  DoctorSpecialists,
  SelectedDivisions,
  SelectedExperience,
} from "@/constants/donor";
import Link from "next/link";
import React, { useState } from "react";
import Select from "react-select";
const SelectDoctor = () => {
  const [specialist, setSpecialist] = useState(null);
  const [experience, setExperience] = useState(null);
  const [division, setDivision] = useState(null);

  return (
    <div>
      <div className="mt-8">
        <label>Doctor Specialist</label>
        <Select
          className="w-96"
          defaultValue={specialist}
          onChange={(event: any) => setSpecialist(event?.value)}
          options={DoctorSpecialists}
        />
      </div>
      <div className="mt-3">
        <label>Doctor Experience</label>
        <Select
          className="w-96"
          defaultValue={experience}
          onChange={(event: any) => setExperience(event?.value)}
          options={SelectedExperience}
        />
      </div>
      <div className="mt-3">
        <label>Doctor Division</label>
        <Select
          className="w-96"
          defaultValue={division}
          onChange={(event: any) => setDivision(event?.value)}
          options={SelectedDivisions}
        />
      </div>

      <div className=" flex items-end h-28 justify-start">
        {experience && division && specialist ? (
          <Link
            href={`/doctor/find/doctor?specialist=${specialist}&experience=${experience}&division=${division}`}
            className=" w-36 h-10 border rounded bg-[#d1001c] text-white flex justify-center items-center"
          >
            Search Doctor
          </Link>
        ) : (
          <button className=" w-36 h-10 border rounded bg-red-400 text-white flex justify-center items-center">
            {" "}
            Search Service
          </button>
        )}
      </div>
    </div>
  );
};

export default SelectDoctor;
