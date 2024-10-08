"use client";

import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import {
  RunningArray,
  ChartType,
  DisplayView,
} from "@/app/lib/utils/definitions";
import { sortDataByDates } from "@/app/lib/utils/sortDataByDates";

interface RunningDefaultChartProps {
  rawData: RunningArray | null;
}

export function RunningDailyChartComponent({
  rawData,
}: RunningDefaultChartProps) {
  const chartRef = useRef<Chart | null>(null); // Ref to store the chart instance
  const [sortedData, setSortedData] = useState<RunningArray | []>(
    rawData ?? []
  );
  const [chartType, setChartType] = useState<ChartType>(ChartType.Line);
  const [chartColor, setChartColor] = useState(
    localStorage.getItem("customColor") ?? "#0d6efd"
  ); // Default color

  useEffect(() => {
    //get sorted data
    const fetchData = async () => {
      const sortedData = await sortDataByDates(
        rawData ?? [],
        DisplayView.DAILY
      );
      setSortedData(sortedData);
    };
    fetchData();
  }, [rawData]);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setChartColor(newColor);
    localStorage.setItem("customColor", newColor);
  };

  useEffect(() => {
    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Initialize the chart
    const ctx = document.getElementById(
      "runningDailyChart"
    ) as HTMLCanvasElement | null;

    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: chartType,
        data: {
          labels: sortedData.map((entry) => entry.date),
          datasets: [
            {
              label: "Daily running data (last 30 days)",
              data: sortedData.map((entry) => entry.kilometer),
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
        <div className="form-check m-2 d-flex justify-content-end">
          <label htmlFor="chartColor" className="form-check-label me-2">
            Select color:
          </label>
          <input
            type="color"
            id="chartColor"
            name="chartColor"
            value={chartColor}
            onChange={handleColorChange}
            className="form-control form-control-color form-control-sm"
          />
        </div>
      </div>
      <canvas
        className="w-100"
        id="runningDailyChart"
        width="900"
        height="380"
      ></canvas>
    </>
  );
}

export default RunningDailyChartComponent;
