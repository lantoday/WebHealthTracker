"use client";
import { HistoryEntry } from "@/app/lib/utils/definitions";

interface HistoryItemProps {
  data: HistoryEntry | null;
}

const HistoryItem: React.FC<HistoryItemProps> = (props) => {
  return (
    <li className="timeline-item mb-5">
      <h5 className="fw-bold">{props.data?.date}</h5>
      <p className="text-muted mb-2 fw-bold">{props.data?.title}</p>
      <p className="text-muted">{props.data?.details}</p>
    </li>
  );
};

export default HistoryItem;
