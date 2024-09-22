"use client";

import React, { useState, useEffect } from "react";
import AddOtherWorkoutModal from "@/app/ui/workouts/others/add-others-modal";
import DailyChart from "@/app/ui/workouts/others/daily-chart";
import WeeklyChart from "@/app/ui/workouts/others/weekly-chart";
import MonthlyChart from "@/app/ui/workouts/others/monthly-chart";
import { getOtherWorkoutData } from "@/app/lib/dbactions/other-workouts";
import { OthersArray, DisplayMode } from "@/app/lib/utils/definitions";

export function RunningComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rawData, setRawData] = useState<OthersArray | null>(null);
  const [displayMode, setDisplayMode] = useState<DisplayMode>(
    DisplayMode.Daily
  );

  useEffect(() => {
    async function getRawData() {
      if (!isModalOpen) {
        const rawData = await getOtherWorkoutData();
        setRawData(rawData);
      }
    }
    getRawData();
  }, [isModalOpen]);

  const hasRunningData = Array.isArray(rawData) && rawData.length > 0;

  const renderChart = () => {
    switch (displayMode) {
      case DisplayMode.Daily:
        return <DailyChart rawData={rawData} />;
      case DisplayMode.Weekly:
        return <WeeklyChart rawData={rawData} />;
      case DisplayMode.Monthly:
        return <MonthlyChart rawData={rawData} />;
      default:
        return <DailyChart rawData={rawData} />;
    }
  };

  return (
    <>
      {hasRunningData && (
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
                Add workout data
              </button>
              {isModalOpen && (
                <AddOtherWorkoutModal onClose={() => setIsModalOpen(false)} />
              )}
            </div>
          </div>
        </div>
      )}

      {!hasRunningData && (
        <div className="d-flex justify-content-center border rounded shadow-sm">
          <div className="p-5">
            <p className="fs-5">No workout data found</p>
            <hr />

            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => setIsModalOpen(true)}
              >
                Add workout data
              </button>
            </div>

            {isModalOpen && (
              <AddOtherWorkoutModal onClose={() => setIsModalOpen(false)} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default RunningComponent;
