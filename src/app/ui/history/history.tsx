"use client";

import { useEffect, useState } from "react";
import Records from "./records";
import AddHistoryModal from "./add-history-modal";
import { getHistory } from "@/app/lib/dbactions/history";
import { HistoryArray } from "@/app/lib/utils/definitions";

const History: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rawData, setRawData] = useState<HistoryArray | null>(null);
  const hasHistory = Array.isArray(rawData) && rawData.length > 0;

  useEffect(() => {
    async function getRawData() {
      if (!isModalOpen) {
        const rawData = await getHistory();
        setRawData(rawData);
      }
    }
    getRawData();
  }, [isModalOpen]);

  return (
    <>
      {hasHistory && (
        <div>
          <div className="py-5 p-3">
            <div className="d-flex justify-content-end m-3">
              <button
                type="button"
                className="btn btn-sm btn-outline-primary"
                onClick={() => setIsModalOpen(true)}
              >
                Add history
              </button>
              {isModalOpen && (
                <AddHistoryModal onClose={() => setIsModalOpen(false)} />
              )}
            </div>
            <Records data={rawData} />
          </div>
        </div>
      )}

      {!hasHistory && (
        <div>
          <div className="py-5 p-3">
            <div className="d-flex justify-content-center">
              <div className="p-5">
                <p className="fs-5">No medical history data found</p>
                <hr />
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Add history
                  </button>
                </div>

                {isModalOpen && (
                  <AddHistoryModal onClose={() => setIsModalOpen(false)} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default History;
