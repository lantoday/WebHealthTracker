"use client";

import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { StepArray, ChartType, DisplayView } from "@/app/lib/definitions";
import { sortDataByDates } from "@/app/lib/utils/sortDataByDates";

interface StepsDefaultChartProps {
  rawData: StepArray | null;
}

export function StepsWeeklyChartComponent({ rawData }: StepsDefaultChartProps) {
  const chartRef = useRef<Chart | null>(null); // Ref to store the chart instance
  const [sortedData, setSortedData] = useState<StepArray | []>(rawData ?? []);
  const [chartType, setChartType] = useState<ChartType>(ChartType.Line);
  const chartColor = localStorage.getItem("customColor") ?? "#0d6efd";

  useEffect(() => {
    //get sorted data
    const fetchData = async () => {
      const sortedData = await sortDataByDates(
        rawData ?? [],
        DisplayView.WEEKLY
      );
      setSortedData(sortedData);
    };
    fetchData();
  }, [rawData]);

  useEffect(() => {
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
      "weeklyChart"
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
  }, [chartType, chartColor, rawData, sortedData]);

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
        id="weeklyChart"
        width="900"
        height="380"
      ></canvas>
    </>
  );
}

export default StepsWeeklyChartComponent;
