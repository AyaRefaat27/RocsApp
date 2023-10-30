import React from "react";
import Navbar from "./Navbar/navbar";
import HomePage from "./Hero/homePage";
import LogoSection from "./Customers/logoSection";

export default function Layout() {
  return (
    <>
      <HomePage />
      <LogoSection />
    </>
  );
}
