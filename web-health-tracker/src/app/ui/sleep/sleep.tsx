"use client";

import React, { useState, useEffect } from "react";
import AddSleepDataModal from "@/app/ui/sleep/add-sleep-modal";
import DailyChart from "@/app/ui/sleep/daily-chart";
import WeeklyChart from "@/app/ui/sleep/weekly-chart";
import MonthlyChart from "@/app/ui/sleep/monthly-chart";
import { getSleepData } from "@/app/lib/dbactions/sleep";
import { SleepArray, DisplayMode } from "@/app/lib/utils/definitions";

export function SleepComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rawData, setRawData] = useState<SleepArray | null>(null);
  const [displayMode, setDisplayMode] = useState<DisplayMode>(
    DisplayMode.Daily
  );

  useEffect(() => {
    async function getRawData() {
      if (!isModalOpen) {
        const rawData = await getSleepData();
        setRawData(rawData);
      }
    }
    getRawData();
  }, [isModalOpen]);

  const hasStepsData = Array.isArray(rawData) && rawData.length > 0;

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
                Add sleep data
              </button>
              {isModalOpen && (
                <AddSleepDataModal onClose={() => setIsModalOpen(false)} />
              )}
            </div>
          </div>
        </div>
      )}

      {!hasStepsData && (
        <div className="d-flex justify-content-center mt-5 border">
          <div className="p-5">
            <p className="h6">No sleep data found</p>
            <hr />
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => setIsModalOpen(true)}
            >
              Add sleep data
            </button>
            {isModalOpen && (
              <AddSleepDataModal onClose={() => setIsModalOpen(false)} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SleepComponent;
