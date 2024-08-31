"use client";

import React, { useState, useEffect } from "react";
import AddStepsModal from "@/app/ui/workouts/steps/add-steps-modal";
import StepsDailyChartComponent from "@/app/ui/workouts/steps/steps-daily-chart";
import StepsWeeklyChartComponent from "@/app/ui/workouts/steps/steps-weekly-chart";
import StepsMonthlyChartComponent from "@/app/ui/workouts/steps/steps-monthly-chart";
import { getSteps } from "@/app/lib/dbactions/steps";
import { StepArray } from "@/app/lib/definitions";

enum DisplayMode {
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
}

export function StepsComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rawData, setRawData] = useState<StepArray | null>(null);
  const [displayMode, setDisplayMode] = useState<DisplayMode>(
    DisplayMode.Daily
  );

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

  const renderChart = () => {
    switch (displayMode) {
      case DisplayMode.Daily:
        return <StepsDailyChartComponent rawData={rawData} />;
      case DisplayMode.Weekly:
        return <StepsWeeklyChartComponent rawData={rawData} />;
      case DisplayMode.Monthly:
        return <StepsMonthlyChartComponent rawData={rawData} />;
      default:
        return <StepsDailyChartComponent rawData={rawData} />;
    }
  };

  return (
    <>
      {hasStepsData && (
        <div>
          <div className="border">{renderChart()}</div>
          <div className="d-flex justify-content-between mt-4">
            <div className="d-flex justify-content-center flex-grow-1">
              <div className="form-check m-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="displayMode"
                  id="radioDaily"
                  checked={displayMode === DisplayMode.Daily}
                  onChange={() => setDisplayMode(DisplayMode.Daily)}
                />
                <label className="form-check-label" htmlFor="radioDaily">
                  Daily
                </label>
              </div>
              <div className="form-check m-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="displayMode"
                  id="radioWeekly"
                  checked={displayMode === DisplayMode.Weekly}
                  onChange={() => setDisplayMode(DisplayMode.Weekly)}
                />
                <label className="form-check-label" htmlFor="radioWeekly">
                  Weekly
                </label>
              </div>
              <div className="form-check m-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="displayMode"
                  id="radioMonthly"
                  checked={displayMode === DisplayMode.Monthly}
                  onChange={() => setDisplayMode(DisplayMode.Monthly)}
                />
                <label className="form-check-label" htmlFor="radioMonthly">
                  Monthly
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-end">
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
