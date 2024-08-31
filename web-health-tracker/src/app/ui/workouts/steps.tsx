"use client";

import React, { useState, useEffect } from "react";
import AddStepsModal from "@/app/ui/workouts/add-steps-modal";
import StepsDailyChartComponent from "@/app/ui/workouts/steps-daily-chart";
import { getSteps } from "@/app/lib/dbactions/steps";
import { StepArray } from "@/app/lib/definitions";

export function StepsComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rawData, setRawData] = useState<StepArray | null>(null);

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
      {hasStepsData && (
        <div>
          <div className="border">
            <StepsDailyChartComponent rawData={rawData} />
          </div>
          <div className="d-flex justify-content-end mt-4">
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
