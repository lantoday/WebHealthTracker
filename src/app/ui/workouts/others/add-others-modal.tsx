"use client";

import React, { useState } from "react";
import { addOtherWorkoutData } from "@/app/lib/actions/other-workouts";
import { OtherWorkoutFormSchema } from "@/app/lib/data/type/otherWorkoutInfo";

export function AddOtherWorkoutModal({ onClose }: { onClose: () => void }) {
  const formattedDate = new Date().toISOString().split("T")[0];

  // Initialize state with default values
  const [formData, setFormData] = useState({
    date: formattedDate,
    kilocalories: "",
    kilometer: "",
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
    const result = OtherWorkoutFormSchema.safeParse(formData);
    if (!result.success) {
      // Handle validation errors
      console.error(result.error);
      return;
    }

    // Call the save function
    try {
      const response = await addOtherWorkoutData(formData);
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
          <div className="modal-header">
            <h5 className="modal-title">Add workout data</h5>
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
                <label htmlFor="kilocalories" className="form-label col-3 h6">
                  Kilocalories:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="kilocalories"
                  min="1"
                  value={formData.kilocalories}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="m-3 d-flex">
                <label htmlFor="kilometer" className="form-label col-3 h6">
                  kilometer:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="kilometer"
                  min="1"
                  value={formData.kilometer}
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
                  Add workout data
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOtherWorkoutModal;
