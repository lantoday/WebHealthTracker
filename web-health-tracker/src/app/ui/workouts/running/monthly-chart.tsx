"use client";

import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import {
  RunningArray,
  ChartType,
  DisplayView,
} from "@/app/lib/utils/definitions";
import { sortRunningDataByDates } from "@/app/lib/utils/sortDataByDates";

interface RunningDefaultChartProps {
  rawData: RunningArray | null;
}

export function RunningMonthlyChartComponent({
  rawData,
}: RunningDefaultChartProps) {
  const chartRef = useRef<Chart | null>(null); // Ref to store the chart instance
  const [sortedData, setSortedData] = useState<RunningArray | []>(
    rawData ?? []
  );
  const [chartType, setChartType] = useState<ChartType>(ChartType.Line);
  const chartColor = localStorage.getItem("customColor") ?? "#0d6efd";

  useEffect(() => {
    //get sorted data
    const fetchData = async () => {
      const sortedData = await sortRunningDataByDates(
        rawData ?? [],
        DisplayView.WEEKLY
      );
      setSortedData(sortedData);
    };
    fetchData();
  }, [rawData]);

  useEffect(() => {
    // Aggregate daily data into monthly data
    const monthlyData = sortedData.reduce((acc, entry) => {
      const date = new Date(entry.date);
      const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`; // Format as YYYY-M

      if (!acc[monthYear]) {
        acc[monthYear] = 0;
      }
      acc[monthYear] += entry.kilometer;
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
      "runningMonthlyChart"
    ) as HTMLCanvasElement | null;

    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: chartType,
        data: {
          labels,
          datasets: [
            {
              label: "Monthly running data (last 12 months)",
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
        id="runningMonthlyChart"
        width="900"
        height="380"
      ></canvas>
    </>
  );
}

export default RunningMonthlyChartComponent;
