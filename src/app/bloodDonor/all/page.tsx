import AllDonor from "@/components/bloodDonor/AllDonor";
import { URL } from "@/constants/common";

const AllDonorPage = async () => {
  // const res = await fetch(`${URL}/blood-donor/all-donor`, {
  //   next: { revalidate: 500 },
  //   cache: "force-cache",
  // });
  // const donor = await res.json();
  // console.log(donor);
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-28 mb-20">
      <AllDonor />
    </div>
  );
};

export default AllDonorPage;
