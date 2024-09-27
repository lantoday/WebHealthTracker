"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string>(pathname);

  useEffect(() => {
    // Update active item based on current route
    setActiveItem(pathname);
  }, [pathname]);

  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-3 bg-light sidebar p-0">
      <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="navbar-brand me-0 bg-dark d-flex justify-content-center bg-gradient">
            <a
              className="nav-link text-light"
              aria-current="page"
              href="/WebHealthTracker"
            >
              <span className="fs-5">WebHealthTracker</span>
            </a>
          </li>
          {/* <li
            className={`p-3 m-0 nav-item fs-6 ${
              activeItem === "/dashboard" ? "bg-primary" : ""
            }`}
          >
            <a
              className={`nav-link ${
                activeItem === "/dashboard" ? "text-light" : ""
              }`}
              href="/dashboard"
              onClick={() => setActiveItem("/dashboard")}
            >
              Dashboard
            </a>
          </li> */}
          <hr className="m-0" />
          <li
            className={`p-3 m-0 nav-item fs-6 ${
              activeItem === "/WebHealthTracker/workouts" ? "bg-primary" : ""
            }`}
          >
            <a
              className={`nav-link ${
                activeItem === "/WebHealthTracker/workouts" ? "text-light" : ""
              }`}
              href="/workouts"
              onClick={() => setActiveItem("/workouts")}
            >
              Workouts
            </a>
          </li>
          <hr className="m-0" />
          <li
            className={`p-3 m-0 nav-item fs-6 ${
              activeItem === "/WebHealthTracker/sleep" ? "bg-primary" : ""
            }`}
          >
            <a
              className={`nav-link ${
                activeItem === "/WebHealthTracker/sleep" ? "text-light" : ""
              }`}
              href="/WebHealthTracker/sleep"
              onClick={() => setActiveItem("/WebHealthTracker/sleep")}
            >
              Sleep data
            </a>
          </li>
          <hr className="m-0" />
          <li
            className={`p-3 m-0 nav-item fs-6 ${
              activeItem === "/WebHealthTracker/history" ? "bg-primary" : ""
            }`}
          >
            <a
              className={`nav-link ${
                activeItem === "/WebHealthTracker/history" ? "text-light" : ""
              }`}
              href="/WebHealthTracker/history"
              onClick={() => setActiveItem("/WebHealthTracker/history")}
            >
              Medical history
            </a>
          </li>
          <hr className="m-0" />
          <li
            className={`p-3 m-0 nav-item fs-6 ${
              activeItem === "/WebHealthTracker/management" ? "bg-primary" : ""
            }`}
          >
            <a
              className={`nav-link ${
                activeItem === "/WebHealthTracker/management"
                  ? "text-light"
                  : ""
              }`}
              href="/management"
              onClick={() => setActiveItem("/WebHealthTracker/management")}
            >
              Management
            </a>
          </li>
          <hr className="m-0" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
