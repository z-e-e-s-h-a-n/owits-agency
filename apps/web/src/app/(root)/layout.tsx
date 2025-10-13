import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "One World Travel & Tourism (Pvt.) Ltd.",
  description:
    "Trusted travel partner in Muscat, Oman 🌍. Offering Umrah packages, flights, hotels, visas & full travel assistance for individuals, families & groups.",
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
