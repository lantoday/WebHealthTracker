"use client";

import React, { useState } from "react";
import { saveSteps } from "@/app/lib/actions/steps";
import { z } from "zod";

const StepsFormSchema = z.object({
  date: z.string(),
  steps: z.number(),
});

export function AddStepsModal({ onClose }: { onClose: () => void }) {
  const formattedDate = new Date().toISOString().split("T")[0];

  // Initialize state with default values
  const [formData, setFormData] = useState({
    date: formattedDate,
    steps: "",
  });

  // Handle form field changes
  const handleChange = (e: { target: { id: any; value: any; type: any } }) => {
    const { id, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "number" ? Number(value) : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Validate the form data
    const result = StepsFormSchema.safeParse(formData);
    if (!result.success) {
      // Handle validation errors
      console.error(result.error);
      return;
    }

    // Call the save function
    try {
      const response = await saveSteps(formData);
      // Handle successful save
      alert(response.message);
      onClose(); // Close the modal
    } catch (error) {
      // Handle save errors
      console.error(error);
    }
  };

  return (
    <div className="modal show d-block" tabIndex={-1} role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-primary-subtle">
            <h5 className="modal-title">Add steps</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="m-3 d-flex">
                <label htmlFor="date" className="form-label col-3 h6">
                  Datetime:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="m-3 d-flex">
                <label htmlFor="steps" className="form-label col-3 h6">
                  Steps:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="steps"
                  value={formData.steps}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={onClose}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-outline-primary">
                  Add steps
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStepsModal;
