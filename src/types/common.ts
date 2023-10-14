export interface IMeta {
  limit: number;
  page: number;
  size: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type ITokenUser = {
  user_id: string;
  role: string;
};

export type DropdownItem = {
  level: string;
  link: string;
  icon: React.ReactElement | React.ReactNode | any;
};
export type ISideBarItem = {
  level: string;
  link: string;
  icon: React.ReactElement | React.ReactNode | any;
  children?: DropdownItem[];
};

export type Column = {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right";
  action?: React.ReactNode | React.ReactElement;
};

export type IMedicine = {
  id: string;

  durgName: string;
  eatingTime: string[];
  duration: string;
  advice: string;
  eat: string;
};

export type IReport = {
  id: string;
  testName: string;
  description: string;
};

export type IDonorReview = {
  id: string;
  donorId: string;
  userId: string;
  comment: string;
  rating: number;
  createdAt: string;
};

export type ICreatePrescription = {
  prescription: {
    appointmentId: string;
    title: string;
    submitDate: string;
    advice: string;
  };
  medicine: {
    durgName: string;
    eatingTime: string;
    duration: string;
    advice: string;
    eat: string;
  };

  haltReport: {
    testName: string;
    description: string;
  };
};

export type ICreateDoctor = {
  name: {
    first_name: string;
    last_name: string;
  };
  email: string;
  password: string;
  avatar: string;
  specialist: string;
  experience: string;
  degree: string;
  date_of_birth: string;
  present_Address: {
    district: string;
    sub_district: string;
    police_station: "No";
    address: string;
  };
  permanent_Address: {
    district: string;
    sub_district: string;
    police_station: "No";
    address: string;
  };
  blood_group: string;
  phone: string;
  gender: string;
  education: [
    {
      institute: "No";
      pass_year: "No";
      GPA: "No";
      completionYear: "NO";
    }
  ];
};
