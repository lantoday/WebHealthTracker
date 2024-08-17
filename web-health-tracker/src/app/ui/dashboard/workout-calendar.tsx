"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import feather from "feather-icons";

const WorkoutCalendar: React.FC = () => {
  const chartRef = useRef<Chart | null>(null); // Ref to store the chart instance

  useEffect(() => {
    // Replace feather icons
    feather.replace({ "aria-hidden": "true" });

    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Initialize the chart
    const ctx = document.getElementById("myChart") as HTMLCanvasElement | null;

    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          datasets: [
            {
              data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
              lineTension: 0,
              backgroundColor: "transparent",
              borderColor: "#007bff",
              borderWidth: 4,
              pointBackgroundColor: "#007bff",
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: false,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }

    // Cleanup function to destroy chart on unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <canvas
      className="my-4 w-100"
      id="myChart"
      width="900"
      height="380"
    ></canvas>
  );
};

export default WorkoutCalendar;
