import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-3 bg-light sidebar p-0">
      <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="navbar-brand me-0 bg-dark d-flex justify-content-center bg-gradient">
            <a className="nav-link text-light" aria-current="page" href="/">
              <span className="h5">Web Health Tracker</span>
            </a>
          </li>
          <hr className="mb-1 mt-0" />
          <li className="nav-item h6">
            <a className="nav-link" aria-current="page" href="/dashboard">
              {/* <span data-feather="home"></span> */}
              Dashboard
            </a>
          </li>
          <hr className="m-2" />
          <li className="nav-item h6">
            <a className="nav-link" href="/exercise">
              {/* <span data-feather="file"></span> */}
              Exercise
            </a>
          </li>
          <hr className="m-2" />
          <li className="nav-item h6">
            <a className="nav-link" href="/sleep">
              {/* <span data-feather="shopping-cart"></span> */}
              Sleep
            </a>
          </li>
          <hr className="m-2" />
          <li className="nav-item h6">
            <a className="nav-link" href="/management">
              {/* <span data-feather="shopping-cart"></span> */}
              Management
            </a>
          </li>
          <hr className="m-2" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
