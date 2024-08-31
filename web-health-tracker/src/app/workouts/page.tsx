"use client";

import React, { useState } from "react";
import Layout from "../ui/shared/main-layout";
import Steps from "../ui/workouts/steps";
import Tooltip from "@/app/ui/shared/tooltip";

const ExercisePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("steps");

  const stepsTooltipText = `Step count is the number of steps you take throughout the day.
Pedometers and digital activity trackers can help you determine your step count. These devices count steps for any activity that involves step-like movement, including walking, running, stair-climbing, cross-country skiing, and even movement as you go about your daily chores.`;

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
              <div className="d-flex">
                <p className="m-0">Steps</p>
                <Tooltip text={stepsTooltipText}>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="--bs-primary-border-subtle"
                      className="bi bi-info-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </div>
                </Tooltip>
              </div>
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
