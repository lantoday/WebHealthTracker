"use client";

// import React from "react";
// import Layout from "../ui/shared/main-layout";
// import Steps from "../ui/exercise/steps";

// const ExercisePage: React.FC = () => {
//   return (
//     <Layout>
//       <p className="h2 d-flex justify-content-center mt-4">Exercise page</p>
//       <hr />
//       <Steps />
//     </Layout>
//   );
// };

// export default ExercisePage;

import React, { useState } from "react";
import Layout from "../ui/shared/main-layout";
import Steps from "../ui/exercise/steps";
// import Running from "../ui/exercise/running"; // Assuming you have a Running component
// import Dancing from "../ui/exercise/dancing"; // Assuming you have a Dancing component

const ExercisePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("steps");

  return (
    <Layout>
      <div className="mt-4">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "steps" ? "active" : ""}`}
              onClick={() => setActiveTab("steps")}
              href="#"
            >
              Steps
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "running" ? "active" : ""}`}
              onClick={() => setActiveTab("running")}
              href="#"
            >
              Running
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "dancing" ? "active" : ""}`}
              onClick={() => setActiveTab("dancing")}
              href="#"
            >
              Dancing
            </a>
          </li>
        </ul>

        <div className="tab-content mt-3">
          <div
            className={`tab-pane fade ${
              activeTab === "steps" ? "show active" : ""
            }`}
          >
            <Steps />
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "running" ? "show active" : ""
            }`}
          >
            Running
            {/* <Running /> */}
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "dancing" ? "show active" : ""
            }`}
          >
            dancing
            {/* <Dancing /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExercisePage;
