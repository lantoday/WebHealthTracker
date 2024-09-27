import React from "react";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="d-flex">
        <div className="col-md-3 ms-sm-auto col-lg-3 px-md-4">
          <Navbar />
        </div>

        <main className="col-md-9 ms-sm-auto col-lg-9 px-md-4">{children}</main>
      </div>
    </>
  );
};

export default Layout;
