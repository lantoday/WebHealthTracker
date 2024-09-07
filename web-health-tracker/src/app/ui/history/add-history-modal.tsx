"use client";

import React, { useState } from "react";
import { addHistory } from "@/app/lib/actions/history";
import { date, z } from "zod";

const HistoryFormSchema = z.object({
  title: z.string(),
  date: z.string(),
  details: z.string(),
  // images: z.array(z.string()),
});

export function AddHistoryModal({ onClose }: { onClose: () => void }) {
  const formattedDate = new Date().toISOString().split("T")[0];

  // Initialize state with default values
  const [formData, setFormData] = useState({
    date: formattedDate,
    title: "",
    details: "",
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
    const result = HistoryFormSchema.safeParse(formData);
    if (!result.success) {
      // Handle validation errors
      console.error(result.error);
      return;
    }

    // Call the save function
    try {
      const response = await addHistory(formData);
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
            <h5 className="modal-title">Add history</h5>
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
                <label htmlFor="title" className="form-label col-3 h6">
                  Title:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="m-3 d-flex">
                <label htmlFor="details" className="form-label col-3 h6">
                  Details:
                </label>
                <textarea
                  maxLength={50}
                  rows={5}
                  cols={50}
                  className="form-control"
                  id="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                ></textarea>
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
                  Add history
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddHistoryModal;
