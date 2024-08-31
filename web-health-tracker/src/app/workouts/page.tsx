"use client";

import React, { useState } from "react";
import Layout from "../ui/shared/main-layout";
import Steps from "../ui/workouts/steps";

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
