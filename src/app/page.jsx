"use client"
import React from "react";
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";
import Home from "./Pages/Home/page";
import DigitalMarketingCard from "./Pages/Details/page";

const page = () => {
  return (
    <>
      {/* <TopNav /> */}
      <Navbar />
      <Home />
      <div className="mt-20">
        <DigitalMarketingCard />
      </div>
    </>
  );
};

export default page;
