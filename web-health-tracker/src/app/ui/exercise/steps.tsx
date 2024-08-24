"use client";

import React, { useState, useEffect } from "react";
import AddStepsModal from "@/app/ui/exercise/add-steps-modal";
import StepsDefaultChartComponent from "@/app/ui/exercise/steps-default-chart";
import Tooltip from "@/app/ui/shared/tooltip";
import { getSteps } from "@/app/lib/dbactions/steps";
import { StepArray } from "@/app/lib/definitions";

export function StepsComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rawData, setRawData] = useState<StepArray | null>(null);
  const tooltipText = `Step count is the number of steps you take throughout the day.
Pedometers and digital activity trackers can help you determine your step count. These devices count steps for any activity that involves step-like movement, including walking, running, stair-climbing, cross-country skiing, and even movement as you go about your daily chores.`;

  useEffect(() => {
    async function mapStepsDataForCharts() {
      if (!isModalOpen) {
        const rawData = await getSteps();
        setRawData(rawData);
      }
    }
    mapStepsDataForCharts();
  }, [isModalOpen]);

  const hasStepsData = Array.isArray(rawData) && rawData.length > 0;

  return (
    <>
      <div className="d-flex justify-content-between p-2 mb-2">
        <div className="d-flex">
          <p className="h5">Steps</p>
          <Tooltip text={tooltipText}>
            <div className="p-1">
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
        <div>
          <button
            type="button"
            className="btn btn-sm btn-outline-primary"
            onClick={() => setIsModalOpen(true)}
          >
            Add steps
          </button>
          {isModalOpen && (
            <AddStepsModal onClose={() => setIsModalOpen(false)} />
          )}
        </div>
      </div>

      {hasStepsData && (
        <div className="border">
          <StepsDefaultChartComponent rawData={rawData} />
        </div>
      )}

      {!hasStepsData && (
        <div className="d-flex justify-content-center border">
          <div className="p-5">
            <p className="h6">No steps data found</p>
            <hr />

            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => setIsModalOpen(true)}
            >
              Add steps
            </button>

            {isModalOpen && (
              <AddStepsModal onClose={() => setIsModalOpen(false)} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default StepsComponent;
