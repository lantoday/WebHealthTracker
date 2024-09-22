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
            <a className="nav-link text-light" aria-current="page" href="/">
              <span className="h5">WebHealthTracker</span>
            </a>
          </li>
          {/* <li
            className={`p-3 m-0 nav-item h6 ${
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
            className={`p-3 m-0 nav-item h6 ${
              activeItem === "/workouts" ? "bg-primary" : ""
            }`}
          >
            <a
              className={`nav-link ${
                activeItem === "/workouts" ? "text-light" : ""
              }`}
              href="/workouts"
              onClick={() => setActiveItem("/workouts")}
            >
              Workouts
            </a>
          </li>
          <hr className="m-0" />
          <li
            className={`p-3 m-0 nav-item h6 ${
              activeItem === "/sleep" ? "bg-primary" : ""
            }`}
          >
            <a
              className={`nav-link ${
                activeItem === "/sleep" ? "text-light" : ""
              }`}
              href="/sleep"
              onClick={() => setActiveItem("/sleep")}
            >
              Sleep data
            </a>
          </li>
          <hr className="m-0" />
          <li
            className={`p-3 m-0 nav-item h6 ${
              activeItem === "/history" ? "bg-primary" : ""
            }`}
          >
            <a
              className={`nav-link ${
                activeItem === "/history" ? "text-light" : ""
              }`}
              href="/history"
              onClick={() => setActiveItem("/history")}
            >
              Medical history
            </a>
          </li>
          <hr className="m-0" />
          <li
            className={`p-3 m-0 nav-item h6 ${
              activeItem === "/management" ? "bg-primary" : ""
            }`}
          >
            <a
              className={`nav-link ${
                activeItem === "/management" ? "text-light" : ""
              }`}
              href="/management"
              onClick={() => setActiveItem("/management")}
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
