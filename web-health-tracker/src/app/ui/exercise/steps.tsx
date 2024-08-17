"use client";

import React, { useState } from "react";
import AddStepsModal from "@/app/ui/exercise/add-steps-modal";

export function StepsComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasStepsData = false;

  return (
    <>
      {hasStepsData && <div>show charts</div>}

      {!hasStepsData && (
        <div className="d-flex justify-content-center border">
          <div className="p-5">
            <p className="h6">No steps data found</p>
            <hr />

            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => setIsModalOpen(true)}
            >
              Add steps
            </button>

            {isModalOpen && (
              <AddStepsModal onClose={() => setIsModalOpen(false)} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default StepsComponent;
