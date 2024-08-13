import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              <span data-feather="home"></span>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/exercise">
              <span data-feather="file"></span>
              Exercise
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/sleep">
              <span data-feather="shopping-cart"></span>
              Sleep
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
