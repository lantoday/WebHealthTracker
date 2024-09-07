"use client";

import { useEffect, useState } from "react";
import HistoryItem from "./history-item";
import {
  HistoryEntry,
  HistoryArray,
  DisplayView,
} from "@/app/lib/utils/definitions";
import { sortDataByDates } from "@/app/lib/utils/sortDataByDates";

interface HistoryDefaultChartProps {
  data: HistoryArray | null;
}

export function Records({ data }: HistoryDefaultChartProps) {
  const [sortedData, setSortedData] = useState<HistoryArray | []>(data ?? []);

  useEffect(() => {
    //get sorted data
    const fetchData = async () => {
      const sortedData = await sortDataByDates(data ?? [], DisplayView.DAILY);
      setSortedData(sortedData);
    };
    fetchData();
  }, [data]);

  return (
    <>
      <div className="py-5 p-3">
        <ul className="timeline">
          {sortedData.map((entry: HistoryEntry, index: number) => (
            <HistoryItem key={index} data={entry} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Records;
