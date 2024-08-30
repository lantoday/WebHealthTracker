"use client";

import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { StepArray } from "@/app/lib/definitions";

interface StepsDefaultChartProps {
  rawData: StepArray | null;
}

export function StepsDailyChartComponent({ rawData }: StepsDefaultChartProps) {
  const chartRef = useRef<Chart | null>(null); // Ref to store the chart instance
  const [chartType, setChartType] = useState("line");

  // Define the start date for the last 30 days
  const startDate = new Date();
  startDate.setDate(new Date().getDate() - 30);

  const sortedData = rawData
    ? rawData
        .slice()
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .filter((entry) => new Date(entry.date) >= startDate)
    : [];

  useEffect(() => {
    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Initialize the chart
    const ctx = document.getElementById(
      "dailyLineChart"
    ) as HTMLCanvasElement | null;

    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: chartType,
        data: {
          labels: sortedData.map((entry) => entry.date),
          datasets: [
            {
              label: "Daily step counts (last 30 days)",
              data: sortedData.map((entry) => entry.steps),
              fill: false,
              borderColor: "#0d6efd",
              backgroundColor: "#0d6efd",
              borderWidth: 1,
              pointRadius: 2,
            },
          ],
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartType, rawData]);

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="form-check m-2">
          <input
            className="form-check-input"
            type="radio"
            name="chartType"
            id="radioLineChart"
            checked={chartType === "line"}
            onChange={() => setChartType("line")}
          />
          <label className="form-check-label" htmlFor="radioLineChart">
            Line chart
          </label>
        </div>
        <div className="form-check m-2">
          <input
            className="form-check-input"
            type="radio"
            name="chartType"
            id="radioBarChart"
            checked={chartType === "bar"}
            onChange={() => setChartType("bar")}
          />
          <label className="form-check-label" htmlFor="radioBarChart">
            Bar chart
          </label>
        </div>
      </div>
      <canvas
        className="w-100"
        id="dailyLineChart"
        width="900"
        height="380"
      ></canvas>
    </>
  );
}

export default StepsDailyChartComponent;
