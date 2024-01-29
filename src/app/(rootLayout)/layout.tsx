import Navbar from "@/components/shared/Navbar";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/lib/Providers";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Health Care",
  description: "Generated by create next app",
};

export default function RootLayoutForHome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
