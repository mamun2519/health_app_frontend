"use client";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import DeleteModal from "@/components/dialog/Delete";
import successMessage from "@/components/shared/SuccessMassage";
import {
  useAppointmentDetailsQuery,
  useUpdateAppointmentMutation,
} from "@/redux/api/appointmentApi";
import { SubmitHandler } from "react-hook-form";
import IconBreadcrumbs from "@/components/ui/Breadcrumb";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/FormProvider";
import FormSelectInput from "@/components/Form/FormSelectInput";
import SelectInput from "@/components/Form/SelectInput";
import {
  MeetStatus,
  SelectDiscount,
  ServiceOfferUpdatedStatus,
} from "@/constants/donor";
import {
  useDitelesGoogleMeetQuery,
  useUpdateGoogleMetMutation,
} from "@/redux/api/googleMeetApi";
import SelectDate from "@/components/Form/SelectDate";
import { useDoctorServiceQuery } from "@/redux/api/doctorServiceApi";
import {
  useServiceOfferDetailsQuery,
  useUpdateServiceOfferMutation,
} from "@/redux/api/serviceOfferApi";
import errorMessage from "@/components/shared/ErrrorMessage";
import { IServiceOfferCrate } from "../../create/page";
interface IGoogleMeet {
  meetLink: string;
  status: {
    value: string;
  };
}
const CreateDoctorServiceOfferEditPage = ({
  params,
}: {
  params: { id: string };
}) => {
  const bread = [
    {
      link: "/dashboard",
      level: "Dashboard",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/serviceOffer",
      level: "ServiceOffer",
      icons: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      color: "inherit",
    },
    {
      link: "/dashboard/Doctor/serviceOffer",
      level: "Edit",
      icons: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,

      color: "text.primary",
    },
  ];
  const { data: offer } = useServiceOfferDetailsQuery(params.id);

  const defaultValues = {
    serviceId: offer?.service?.id || "",
    status: offer?.status || "",
    promoCode: offer?.promoCode || "",
    discount: offer?.discount || "",
    offerTitle: offer?.offerTitle || "",
    //     expireDate: offer?.expireDate || "",
  };
  const [updateServiceOffer] = useUpdateServiceOfferMutation();
  const editHandler: SubmitHandler<IServiceOfferCrate> = async (data) => {
    data.discount = Number(data.discount);
    try {
      const res = await updateServiceOffer({
        body: data,
        id: params.id,
      }).unwrap();
      if (res) {
        successMessage({
          message: "Service Offer Update Successfully",
          header: "Thank you",
        });
      } else {
        errorMessage({ message: "something is wrong" });
      }
    } catch (error: any) {
      errorMessage({ message: error?.data });
    }
  };

  const { data } = useDoctorServiceQuery({ limit: 100, page: 1 });

  const serviceOfferOptions = data?.map((service: any) => {
    return {
      label: service?.title,
      value: service?.id,
    };
  });
  return (
    <div className="h-[600px  border  p-5 rounded-3xl shadow-sm ">
      <IconBreadcrumbs boreadcrumbs={bread}></IconBreadcrumbs>
      <h3 className=" mt-5 text-2xl">Edit GoogleMeet</h3>
      <div className="mt-5"></div>
      <Form submitHandler={editHandler} defaultValues={defaultValues}>
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className=" mt-2 ">
            <FormInput
              name="offerTitle"
              label="Title"
              size="lg:w-96 w-72"
              placeholder="Enter Your  title"
            />
          </div>
          <div className=" mt-2">
            <FormInput
              name="promoCode"
              size="lg:w-96 w-72"
              label="Promo Code"
              placeholder="Enter Promo Code"
            />
          </div>
          {/* <div className=" mt-2">
            <FormInput
              name="service.avatar"
              size="lg:w-96 w-72"
              label="Avatar"
              placeholder="Enter Patient avatar"
            />
          </div> */}
          <div className=" mt-2">
            <SelectDate name="expireDate" label="Expire Date" />
          </div>
        </div>
        <div className="mt-5 grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className=" mt-3">
            <SelectInput
              name="discount"
              label="Discount"
              options={SelectDiscount}
            />
          </div>
          <div className=" mt-3">
            <SelectInput
              name="serviceId"
              label="Service"
              options={serviceOfferOptions}
            />
          </div>
          <div className=" mt-3">
            <SelectInput
              name="status"
              label="Status"
              options={ServiceOfferUpdatedStatus}
            />
          </div>
        </div>

        <div className="py-2 w-56 mt-5">
          <button
            type="submit"
            className=" px-10 h-10 w-full rounded bg-[#d1001c] text-white font-medium "
          >
            Update Now
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CreateDoctorServiceOfferEditPage;
