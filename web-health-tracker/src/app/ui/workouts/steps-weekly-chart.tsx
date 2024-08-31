"use client";

import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { StepArray } from "@/app/lib/definitions";

interface StepsDefaultChartProps {
  rawData: StepArray | null;
}

export function StepsWeeklyChartComponent({ rawData }: StepsDefaultChartProps) {
  const chartRef = useRef<Chart | null>(null); // Ref to store the chart instance
  const [chartType, setChartType] = useState<"line" | "bar">("line");
  const chartColor = localStorage.getItem("customColor") ?? "#0d6efd";

  useEffect(() => {
    // Define the start date for the last 365 days
    const startDate = new Date();
    startDate.setDate(new Date().getDate() - 365);

    const sortedData = rawData
      ? rawData
          .slice()
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .filter((entry) => new Date(entry.date) >= startDate)
      : [];

    // Aggregate daily data into weekly data
    const weeklyData = sortedData.reduce((acc, entry) => {
      const date = new Date(entry.date);
      const weekStart = new Date(date.setDate(date.getDate() - date.getDay()));
      const weekStartStr = weekStart.toISOString().split("T")[0]; // Format as YYYY-MM-DD

      if (!acc[weekStartStr]) {
        acc[weekStartStr] = 0;
      }
      acc[weekStartStr] += entry.steps;
      return acc;
    }, {} as Record<string, number>);

    const labels = Object.keys(weeklyData).sort(); // Sort weeks
    const data = labels.map((week) => weeklyData[week]);

    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Initialize the chart
    const ctx = document.getElementById(
      "weeklyLineChart"
    ) as HTMLCanvasElement | null;

    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: chartType,
        data: {
          labels,
          datasets: [
            {
              label: "Weekly steps count (last 52 weeks)",
              data,
              fill: false,
              borderColor: chartColor,
              backgroundColor: chartColor,
              borderWidth: 1,
              pointRadius: 2,
            },
          ],
        },
      });
    }
  }, [chartType, chartColor, rawData]);

  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-center flex-grow-1">
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
      </div>
      <canvas
        className="w-100"
        id="weeklyLineChart"
        width="900"
        height="380"
      ></canvas>
    </>
  );
}

export default StepsWeeklyChartComponent;
