import React from "react";
import Header from "./ui/header";
import Navbar from "./ui/navbar";
import MainDashboard from "./ui/main-dashboard";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <MainDashboard />
        </div>
      </div>
    </>
  );
}
