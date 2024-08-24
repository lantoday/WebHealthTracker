"use client";

import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { StepArray } from "@/app/lib/definitions";

interface StepsDefaultChartProps {
  rawData: StepArray | null;
}

export function StepsDefaultChartComponent({
  rawData,
}: StepsDefaultChartProps) {
  //register the chartjs plugins
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
  );

  const labels = rawData ? rawData.map((entry) => entry.date) : [];
  const data = rawData ? rawData.map((entry) => entry.steps) : [];
  console.log(labels);
  console.log(data);

  const stepsData = {
    labels: labels,
    datasets: [
      {
        label: "GeeksforGeeks Line Chart",
        data: data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        pointRadius: 4,
      },
    ],
  };

  return (
    <>
      <div>
        <Line data={stepsData} />
      </div>
    </>
  );
}

export default StepsDefaultChartComponent;
