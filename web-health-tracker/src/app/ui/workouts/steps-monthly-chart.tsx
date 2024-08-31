"use client";

import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { StepArray, ChartType } from "@/app/lib/definitions";

interface StepsDefaultChartProps {
  rawData: StepArray | null;
}

export function StepsMonthlyChartComponent({
  rawData,
}: StepsDefaultChartProps) {
  const chartRef = useRef<Chart | null>(null); // Ref to store the chart instance
  const [chartType, setChartType] = useState<ChartType>(ChartType.Line);
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

    // Aggregate daily data into monthly data
    const monthlyData = sortedData.reduce((acc, entry) => {
      const date = new Date(entry.date);
      const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`; // Format as YYYY-M

      if (!acc[monthYear]) {
        acc[monthYear] = 0;
      }
      acc[monthYear] += entry.steps;
      return acc;
    }, {} as Record<string, number>);

    const labels = Object.keys(monthlyData).sort(); // Sort months
    const data = labels.map((month) => monthlyData[month]);

    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Initialize the chart
    const ctx = document.getElementById(
      "monthlyChart"
    ) as HTMLCanvasElement | null;

    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: chartType,
        data: {
          labels,
          datasets: [
            {
              label: "Monthly steps count (last 12 months)",
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
              checked={chartType === ChartType.Line}
              onChange={() => setChartType(ChartType.Line)}
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
              checked={chartType === ChartType.Bar}
              onChange={() => setChartType(ChartType.Bar)}
            />
            <label className="form-check-label" htmlFor="radioBarChart">
              Bar chart
            </label>
          </div>
        </div>
      </div>
      <canvas
        className="w-100"
        id="monthlyChart"
        width="900"
        height="380"
      ></canvas>
    </>
  );
}

export default StepsMonthlyChartComponent;
