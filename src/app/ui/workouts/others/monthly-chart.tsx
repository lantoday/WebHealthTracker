"use client";

import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import {
  OthersArray,
  ChartType,
  DisplayView,
} from "@/app/lib/utils/definitions";
import { sortDataByDates } from "@/app/lib/utils/sortDataByDates";

interface OtherWorkoutDefaultChartProps {
  rawData: OthersArray | null;
}

export function OtherWorkoutMonthlyChartComponent({
  rawData,
}: OtherWorkoutDefaultChartProps) {
  const chartRef = useRef<Chart | null>(null); // Ref to store the chart instance
  const [sortedData, setSortedData] = useState<OthersArray | []>(rawData ?? []);
  const [chartType, setChartType] = useState<ChartType>(ChartType.Line);
  const chartColor = localStorage.getItem("customColor") ?? "#0d6efd";

  useEffect(() => {
    // Get sorted data
    const fetchData = async () => {
      const sortedData = await sortDataByDates(
        rawData ?? [],
        DisplayView.MONTHLY
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
        acc[monthYear] = { kilometer: 0, kilocalories: 0 };
      }
      acc[monthYear].kilometer += entry.kilometer;
      acc[monthYear].kilocalories += entry.kilocalories;
      return acc;
    }, {} as Record<string, { kilometer: number; kilocalories: number }>);

    const labels = Object.keys(monthlyData).sort(); // Sort months
    const kilometersData = labels.map((month) => monthlyData[month].kilometer);
    const kilocaloriesData = labels.map(
      (month) => monthlyData[month].kilocalories
    );

    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Initialize the chart
    const ctx = document.getElementById(
      "othersMonthlyChart"
    ) as HTMLCanvasElement | null;

    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: chartType,
        data: {
          labels,
          datasets: [
            {
              label: "Kilometers (last 12 months)",
              data: kilometersData,
              fill: false,
              borderColor: chartColor, // Different color for kilometers
              backgroundColor: chartColor,
              borderWidth: 1,
              pointRadius: 2,
            },
            {
              label: "Kilocalories (last 12 months)",
              data: kilocaloriesData,
              fill: false,
              borderColor: "#0d6efd", // Different color for kilocalories
              backgroundColor: "#0d6efd",
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
        id="othersMonthlyChart"
        width="900"
        height="380"
      ></canvas>
    </>
  );
}

export default OtherWorkoutMonthlyChartComponent;
