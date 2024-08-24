"use client";

import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { StepArray } from "@/app/lib/definitions";

interface StepsDefaultChartProps {
  rawData: StepArray | null;
}

export function StepsDailyChartComponent({ rawData }: StepsDefaultChartProps) {
  const chartRef = useRef<Chart | null>(null); // Ref to store the chart instance

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
        type: "line",
        data: {
          labels: sortedData.map((entry) => entry.date),
          datasets: [
            {
              label: "Step counts (last 30 days)",
              data: sortedData.map((entry) => entry.steps),
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              borderWidth: 1,
              pointRadius: 2,
            },
          ],
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawData]);

  return (
    <>
      <canvas
        className="my-4 w-100"
        id="dailyLineChart"
        width="900"
        height="380"
      ></canvas>
    </>
  );
}

export default StepsDailyChartComponent;
