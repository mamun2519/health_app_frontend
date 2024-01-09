"use client";
import Image from "next/image";
import React, { useState } from "react";
import DonorHelp from "../../assets/Save the Earth-pana.svg";
import FormInput from "../Form/FormInput";
import Form from "../Form/FormProvider";
import SelectInput from "../Form/SelectInput";
import {
  SelectedBloodGroup,
  SelectedDivisions,
  SelectedGender,
  formattedBarisalDistricts,
  formattedChittagongDistricts,
  formattedKhulnaDistricts,
  formattedMymensinghDistricts,
  formattedRajshahiDistricts,
  formattedRangpurDistricts,
  formattedSylhetDistricts,
} from "@/constants/donor";
import SelectDate from "../Form/SelectDate";
import { useCreateDonorMutation } from "@/redux/api/authApi";
import successMessage from "../shared/SuccessMassage";
import { SubmitHandler } from "react-hook-form";
import { ICreateDonor } from "@/types";
import errorMessage from "../shared/ErrrorMessage";
import { logOut, storeUserInfo } from "@/services/auth.Services";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { ImageUpload } from "../Form/ImageUplaod";
import { yupResolver } from "@hookform/resolvers/yup";
import { createDonorSchema } from "../schema/donor";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/Slice/user";
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));
const DonorRegistrationForm = () => {
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const dispatch = useAppDispatch();
  const [error, setErrorMessage] = useState("");
  const [createDonor] = useCreateDonorMutation();
  const [division, setDivision] = useState("");
  const router = useRouter();
  const createDonorHandler: SubmitHandler<ICreateDonor> = async (value) => {
    value.present_Address.police_station = "No";
    value.avatar = imageUrl as string;
    value.present_Address.district = division as string;
    console.log(value);
    try {
      if (imageUrl && division) {
        const res = await createDonor(value).unwrap();
        console.log(res);

        if (res) {
          successMessage({
            message: "Donor Account Create Successfully",
            header: "Thank you",
          });
          if (res?.userToken) {
            router.push("/");
            logOut();
            dispatch(
              setUser({
                userId: res?.user?.id,
                email: res?.user?.email,
                role: res?.user?.role,
              })
            );

            // TODO USE TOST HERE
          }

          storeUserInfo({ accessToken: res?.userToken });
        } else {
          errorMessage({ message: "Something is wrong" });
        }
      } else {
        setErrorMessage("Image Is Required");
      }
    } catch (error: any) {
      errorMessage({ message: error?.data });
      console.log(error);
    }
    // console.log(value.startTime);
    // const time = convertToAmPm(value.salt.startTime);
    // console.log(time);
  };

  return (
    <div className=" mt-28  max-w-7xl mx-auto px-4 lg:px-0 ">
      <div className=" lg:flex gap-5">
        <div className=" lg:w-[48vw] w-full  bg-[#30029010] p-5">
          <div className=" flex gap-3  items-center ">
            <h3 className=" text-3xl uppercase">Join Us To day</h3>
            <div className="h-1 bg-red-500 lg:w-52 w-20"></div>
          </div>
          <div className=" w-full h-full mt-10 ">
            <Image src={DonorHelp} alt="Donor Pic" className=" w-full" />
            <p className="mt-5">
              Blood donation is a noble act with myriad benefits. Not only does
              it save lives by providing a lifeline to those in need, but it
              also has positive effects on the donor. Donating blood can improve
              the donors cardiovascular health, reducing the risk of heart
              disease. It stimulates the production of new blood cells, which
              can enhance overall well-being.
            </p>
          </div>
        </div>
        <div className=" w-full  h-full border-l  lg:pl-10 pt-5 p-3">
          <div className=" flex gap-3  items-center">
            <h3 className=" text-3xl uppercase">To Be Donor</h3>
            <div className="h-1 bg-red-500 lg:w-52 w-28"></div>
          </div>
          <div className=" ">
            <Form
              submitHandler={createDonorHandler}
              resolver={yupResolver(createDonorSchema)}
            >
              <div className=" grid lg:grid-cols-3 gap-5">
                <div className="mt-3">
                  <FormInput
                    label="First Name"
                    placeholder="First Name"
                    size="full"
                    name="name.first_name"
                  ></FormInput>
                </div>
                <div className="mt-3">
                  <FormInput
                    label="Last Name"
                    placeholder="Last Name"
                    size="full"
                    name="name.last_name"
                  ></FormInput>
                </div>
                <div className="mt-3">
                  <FormInput
                    label="phone"
                    placeholder="Enter Phone"
                    size="full"
                    name="phone"
                  ></FormInput>
                </div>
              </div>
              <div className=" grid lg:grid-cols-3 gap-5">
                <div className="mt-3">
                  <SelectInput
                    name="blood_group"
                    label="Blood Group"
                    options={SelectedBloodGroup}
                  />
                </div>
                <div className="mt-3">
                  <SelectInput
                    name="gender"
                    label="Gender"
                    options={SelectedGender}
                  />
                </div>
                <div className="mt-3">
                  <SelectDate
                    name="date_of_birth"
                    size="lg:w-96 w-72"
                    label="Date of Birth"
                    placeholder="Enter Patient avatar"
                  />
                </div>
              </div>
              <div className=" grid grid-cols- gap-5"></div>
              <div className="mt-5">
                <h3>Present Address</h3>
                <div className=" grid lg:grid-cols-2  gap-5">
                  <div className="mt-3">
                    {/* <FormInput
                      label="District"
                      placeholder="Enter District"
                      size="full"
                      name="present_Address.sub_district"
                    ></FormInput> */}
                    <FormControl className="w-full">
                      <InputLabel id="demo-customized-select-label">
                        Division
                      </InputLabel>
                      <Select
                        // placeholder={placeholder}
                        autoFocus={true}
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={division}
                        onChange={(e) => setDivision(e.target.value)}
                        // input={<BootstrapInput />}
                      >
                        {SelectedDivisions?.map((op, i) => (
                          <MenuItem key={i} value={op.value}>
                            {op.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {error && <p className="text-red-500">Image is required</p>}
                  </div>
                  <div className="mt-3">
                    {division === "Chittagong" && (
                      <SelectInput
                        name="present_Address.sub_district"
                        label="District"
                        options={formattedChittagongDistricts}
                      />
                    )}
                    {division == "Khulna" && (
                      <SelectInput
                        name="present_Address.sub_district"
                        label="District"
                        options={formattedKhulnaDistricts}
                      />
                    )}
                    {division == "Rangpur" && (
                      <SelectInput
                        name="present_Address.sub_district"
                        label="District"
                        options={formattedRangpurDistricts}
                      />
                    )}
                    {division == "Rajshahi" && (
                      <SelectInput
                        name="present_Address.sub_district"
                        label="District"
                        options={formattedRajshahiDistricts}
                      />
                    )}
                    {division == "Sylhet" && (
                      <SelectInput
                        name="present_Address.sub_district"
                        label="District"
                        options={formattedSylhetDistricts}
                      />
                    )}
                    {division == "Mymensingh" && (
                      <SelectInput
                        name="present_Address.sub_district"
                        label="District"
                        options={formattedMymensinghDistricts}
                      />
                    )}
                    {division == "Borisal" && (
                      <SelectInput
                        name="present_Address.sub_district"
                        label="District"
                        options={formattedBarisalDistricts}
                      />
                    )}
                  </div>
                </div>
                <div className=" grid lg:grid-cols-2 gap-5">
                  <div className="mt-3">
                    <FormInput
                      label="Address"
                      placeholder="Enter address"
                      size="full"
                      name="present_Address.address"
                    ></FormInput>
                  </div>
                  <div className="mt-3">
                    <div>
                      <ImageUpload setImageUrl={setImageUrl} />
                      {error && (
                        <p className="text-red-500">Image is required</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="mt-5">
                <h3>Permanent Address</h3>
                <div className=" grid grid-cols-2  gap-5">
                  <div className="mt-3">
                    <FormInput
                      label="gender"
                      placeholder="Enter Gender"
                      size="full"
                      name="name"
                    ></FormInput>
                  </div>
                  <div className="mt-3">
                    <FormInput
                      label="Date Of Birth"
                      placeholder="First Name"
                      size="full"
                      name="name"
                    ></FormInput>
                  </div>
                </div>
                <div className=" grid grid-cols-2 gap-5">
                  <div className="mt-3">
                    <FormInput
                      label="phone"
                      placeholder="Enter Phone"
                      size="full"
                      name="name"
                    ></FormInput>
                  </div>
                  <div className="mt-3">
                    <FormInput
                      label="Avatar"
                      placeholder="Avatar"
                      size="full"
                      name="name"
                    ></FormInput>
                  </div>
                </div>
              </div> */}
              <div className="mt-5">
                <h3>User Cradtional</h3>
                <FormInput
                  label="email"
                  placeholder="Enter Email"
                  size="full"
                  name="email"
                ></FormInput>
                <div className="mt-3">
                  <FormInput
                    label="Password"
                    placeholder="Enter Password"
                    size="full"
                    name="password"
                  ></FormInput>
                </div>
              </div>
              <div className="mt-5">
                <h3>I Agree All Tomes And Conditions</h3>
              </div>
              <div className=" flex gap-5 mt-3 justify-cente">
                <button
                  type="submit"
                  className=" w-52 h-10 rounded bg-[#d1001c] text-white font-medium "
                >
                  Registration Now
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorRegistrationForm;
