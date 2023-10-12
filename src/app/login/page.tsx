import Login from "@/components/ui/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donor App | Login",
  description: "Generated by create next app",
};
const LoginPage = () => {
  return (
    <div className=" mt-10  max-w-7xl mx-auto px-4 lg:px-0">
      <Login />
    </div>
  );
};

export default LoginPage;
