import React from "react";

const Header: React.FC = () => {
  return (
    <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0">
      <a
        className="navbar-brand col-md-3 col-lg-3 me-0 bg-dark d-flex justify-content-center bg-gradient"
        href="/"
      >
        <span className="h5">WebHealthTracker</span>
      </a>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <input
        className="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <a className="nav-link px-3" href="#">
            Sign out
          </a>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
