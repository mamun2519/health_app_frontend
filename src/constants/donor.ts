export const bloodGroups = [
  {
    title: "A+",
  },
  {
    title: "A-",
  },
  {
    title: "AB+",
  },
  {
    title: "AB-",
  },
  {
    title: "B+",
  },
  {
    title: "B-",
  },
  {
    title: "0+",
  },
  {
    title: "0-",
  },
];
export const divisions = [
  {
    title: "Khulna",
  },
  {
    title: "Rangpur",
  },
  {
    title: "Chittagong",
  },
  {
    title: "Rajshahi",
  },
  {
    title: "Sylhet",
  },
  {
    title: "Mymensingh",
  },
  {
    title: "Borisal",
  },
];

export const ChittagongDistricts = [
  {
    title: "Chittagong",
  },
  {
    title: "Cox's Bazar",
  },
  {
    title: "Bandarban",
  },
  {
    title: "Khagrachari",
  },
  {
    title: "Rangamati",
  },
  {
    title: "Feni",
  },
  {
    title: "Noakhali",
  },
  {
    title: "Laxmipur",
  },
  {
    title: "Chandpur",
  },
  {
    title: "Comilla",
  },
  {
    title: "Brahmanbaria",
  },
];
export const KhulnaDistricts = [
  {
    title: "Khulna",
  },
  {
    title: "Bagerhat",
  },
  {
    title: "Satkhira",
  },
  {
    title: "Jessore",
  },
  {
    title: "Narail",
  },
  {
    title: "Magura",
  },
  {
    title: "Meherpur",
  },
  {
    title: "Chuadanga",
  },
  {
    title: "Kushtia",
  },
  {
    title: "Jhenaidah",
  },
];
export const RangpurDistricts = [
  {
    title: "Rangpur",
  },
  {
    title: "Dinajpur",
  },
  {
    title: "Thakurgaon",
  },
  {
    title: "Panchagarh",
  },
  {
    title: "Kurigram",
  },
  {
    title: "Nilphamari",
  },
  {
    title: "Lalmonirhat",
  },
  {
    title: "Gaibandha",
  },
];
export const RajshahiDistricts = [
  {
    title: "Rajshahi",
  },
  {
    title: "Bogura",
  },
  {
    title: "Pabna",
  },
  {
    title: "Sirajganj",
  },
  {
    title: "Naogaon",
  },
  {
    title: "Natore",
  },
  {
    title: "Joypurhat",
  },
  {
    title: "Chapainawabganj",
  },
];
export const SylhetDistricts = [
  {
    title: "Sylhet",
  },
  {
    title: "Moulvibazar",
  },
  {
    title: "Habiganj",
  },
  {
    title: "Sunamganj",
  },
];
export const MymensinghDistricts = [
  {
    title: "Mymensingh",
  },
  {
    title: "Netrokona",
  },
  {
    title: "Kishoreganj",
  },
  {
    title: "Jamalpur",
  },
];
export const BarisalDistricts = [
  {
    title: "Barisal",
  },
  {
    title: "Bhola",
  },
  {
    title: "Pirojpur",
  },
  {
    title: "Barguna",
  },
  {
    title: "Jhalokati",
  },
];

export const SelectedDivisions = [
  { value: "Khulna", label: "Khulna" },
  { value: "Rangpur", label: "Rangpur" },
  { value: "Chittagong", label: "Chittagong" },
  { value: "Rajshahi", label: "Rajshahi" },
  { value: "Sylhet", label: "Sylhet" },
  { value: "Mymensingh", label: "Mymensingh" },
  { value: "Borisal", label: "Borisal" },
];

export const formattedChittagongDistricts = ChittagongDistricts.map(
  (district) => ({
    value: district.title,
    label: district.title,
  })
);
export const formattedKhulnaDistricts = KhulnaDistricts.map((district) => ({
  value: district.title,
  label: district.title,
}));
export const formattedRangpurDistricts = RangpurDistricts.map((district) => ({
  value: district.title,
  label: district.title,
}));
export const formattedRajshahiDistricts = RajshahiDistricts.map((district) => ({
  value: district.title,
  label: district.title,
}));
export const formattedMymensinghDistricts = MymensinghDistricts.map(
  (district) => ({
    value: district.title,
    label: district.title,
  })
);
export const formattedBarisalDistricts = BarisalDistricts.map((district) => ({
  value: district.title,
  label: district.title,
}));

export const formattedSylhetDistricts = SylhetDistricts.map((district) => ({
  value: district.title,
  label: district.title,
}));

export const SelectedBloodGroup = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "0+", label: "0+" },
  { value: "O-", label: "0-" },
];

export const SelectDiscount = [
  { value: "5", label: "5 %" },
  { value: "10", label: "10 %" },
  { value: "15", label: "15 % " },
  { value: "20", label: "20 %" },
  { value: "25", label: "25 %" },
  { value: "40", label: "40 %" },
  { value: "50", label: "50 %" },
  { value: "60", label: "60 %" },
  { value: "70", label: "70 %" },
  { value: "80", label: "80 %" },
  { value: "90", label: "90 %" },
  { value: "95", label: "95 %" },
  { value: "99", label: "99 %" },
];
export const SelectedGender = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

export const SelectedExperience = [
  { value: "1", label: "1 Year" },
  { value: "2", label: "2 Year" },
  { value: "3", label: "3 Year" },
  { value: "4", label: "4 Year" },
  { value: "5", label: "5 Year" },
  { value: "7", label: "7 Year" },
  { value: "9", label: "9 Year" },
  { value: "12", label: "12 Year" },
  { value: "15", label: "15 Year" },
];
export const DoctorSpecialists = [
  { value: "Cardiologist", label: "Cardiologist" },
  { value: "Orthopedic Surgeon", label: "Orthopedic Surgeon" },
  { value: "Gynecologist", label: "Gynecologist" },
  { value: "Neurologist", label: "Neurologist" },
  { value: "Dermatologist", label: "Dermatologist" },
  { value: "Pediatrician", label: "Pediatrician" },
  { value: "Ophthalmologist", label: "Ophthalmologist" },
  { value: "Psychiatrist", label: "Psychiatrist" },
  { value: "Endocrinologist", label: "Endocrinologist" },
  { value: "Urologist", label: "Urologist" },
];

export const DoctorDegrees = [
  { value: "Doctor of Medicine (M.D.)", label: "Doctor of Medicine (M.D.)" },
  {
    value: "Doctor of Osteopathic Medicine (D.O.)",
    label: "Doctor of Osteopathic Medicine (D.O.)",
  },
  {
    value: "Doctor of Dental Medicine (D.M.D.)",
    label: "Doctor of Dental Medicine (D.M.D.)",
  },
  {
    value: "Doctor of Dental Surgery (D.D.S.)",
    label: "Doctor of Dental Surgery (D.D.S.)",
  },
  { value: "Doctor of Optometry (O.D.):", label: "Doctor of Optometry (O.D.)" },
  {
    value: "Doctor of Chiropractic (D.C.)",
    label: "Doctor of Chiropractic (D.C.)",
  },
  {
    value: "Doctor of Nursing Practice (D.N.P.)",
    label: "Doctor of Nursing Practice (D.N.P.)",
  },
  {
    value: "Doctor of Physical Therapy (D.P.T.)",
    label: "Doctor of Physical Therapy (D.P.T.)",
  },
];

export const ServiceCategory = [
  {
    value: "Primary Care Services",
    label: "Primary Care Services",
  },
  {
    value: "Specialty Medical Services",
    label: "Specialty Medical Services",
  },
  { value: "Surgical Services", label: "Surgical Services" },
  { value: "Diagnostic Services", label: "Diagnostic Services" },
  { value: "Medicine Services", label: "Medicine Services" },
  { value: "Health Services", label: "Health Services" },
  { value: "Mental Health Services", label: "Mental Health Services" },
  { value: "Cancer Care Services", label: "Cancer Care Services" },
];

export const Days = [
  { value: "Sunday", label: "Sunday" },
  {
    value: "Monday",
    label: "Monday",
  },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
  { value: "Saturday", label: "Saturday" },
];

export const Limit = [
  { value: "5", label: "5" },
  {
    value: "10",
    label: "10",
  },
  { value: "15", label: "15" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
  { value: "50", label: "50" },
  { value: "100", label: "100" },
];

export const Duration = [
  { value: "5", label: "5 Minute" },
  {
    value: "10",
    label: "10 Minute",
  },
  { value: "15", label: "15 Minute" },
  {
    value: "20",
    label: "20 Minute",
  },
  { value: "25", label: "25 Minute" },
  {
    value: "30",
    label: "30 Minute",
  },
];

export const DonorRequestUpdatedStatus = [
  { value: "Accepted", label: "Accepted" },
  {
    value: "Cancel",
    label: "Cancel",
  },
];

export const SelectWithdrawMethod = [
  { value: "Bank", label: "Bank" },
  {
    value: "Nogod",
    label: "Nogod",
  },
  { value: "Bikash", label: "Bikash" },
  {
    value: "MasterCard",
    label: "MasterCard",
  },
  {
    value: "Paypal",
    label: "Paypal",
  },
];

export const ServiceOfferUpdatedStatus = [
  { value: "Active", label: "Active" },
  {
    value: "Expired",
    label: "Expired",
  },
];
export const WithdrawStatus = [
  { value: "Cancel", label: "Cancel" },
  {
    value: "Complete",
    label: "Complete",
  },
];

export const MeetStatus = [
  { value: "Active", label: "Active" },
  {
    value: "Cancel",
    label: "Cancel",
  },
  { value: "Expired", label: "Expired" },
  {
    value: "Complete",
    label: "Complete",
  },
];

export const AppointmentChangeStatus = [
  { value: "Accepted", label: "Accepted" },
  { value: "Complete", label: "Complete" },
  { value: "Expired", label: "Expired" },
  { value: "Reject", label: "Reject" },
];

export const AppointmentSort = [
  { value: "bookingDate", label: "Booking Date" },
  {
    value: "slatTime",
    label: "SlatTime",
  },
  {
    value: "serialNo",
    label: "Serial No",
  },
];
export const DonorRequestSort = [
  { value: "location", label: "Location" },
  {
    value: "phone",
    label: "Phone",
  },
  {
    value: "donnetDate",
    label: "Date",
  },
  {
    value: "quantity",
    label: "Quantity",
  },
];

export const PrescriptionSort = [
  { value: "title", label: "Title" },
  {
    value: "submitDate",
    label: "Submit Date",
  },
  {
    value: "donnetDate",
    label: "Date",
  },
  {
    value: "status",
    label: "Status",
  },
];

export const PaymentSort = [
  { value: "price", label: "Price" },
  {
    value: "transactionId",
    label: "Transaction Id",
  },
  {
    value: "discountedPrice",
    label: "Discounted Price",
  },
  {
    value: "paymentType",
    label: "Payment Type",
  },
  {
    value: "status",
    label: "Payment Status",
  },
];

export const DoctorServiceSort = [
  {
    value: "title",
    label: "Title",
  },
  { value: "price", label: "Price" },
  {
    value: "category",
    label: "Category",
  },
  {
    value: "serviceType",
    label: "Service Type",
  },
];

export const OfferSort = [
  {
    value: "offerTitle",
    label: "Offer Title",
  },
  { value: "promoCode", label: "Promo Code" },
  {
    value: "discount",
    label: "Discount",
  },
  {
    value: "expireDate",
    label: "Expire Date",
  },
];

export const GoogleSort = [
  {
    value: "meetLink",
    label: "Meet Link",
  },
  { value: "status", label: "Status" },
];

export const WithdrawSort = [
  {
    value: "amount",
    label: "Balance",
  },
  { value: "paymentReciveType", label: "Payment Type" },
  {
    value: "number",
    label: "Account No",
  },
  {
    value: "Status",
    label: "status",
  },
];

export const UserSort = [
  {
    value: "email",
    label: "Email",
  },
  { value: "status", label: "Status" },
  {
    value: "createdAt",
    label: "Create Date",
  },
];
