import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/lib/Providers";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Donor App | Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" data-theme="light">
        <body>
          {/* <Navbar /> */}
          <Header />
          {children}
          {/* <Footer /> */}
        </body>
      </html>
    </Providers>
  );
}
