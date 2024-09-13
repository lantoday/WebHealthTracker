"use client";

import React, { useState } from "react";
import { addHistory } from "@/app/lib/actions/history";
import { z } from "zod";

const HistoryFormSchema = z.object({
  title: z.string(),
  date: z.string(),
  details: z.string(),
  files: z.array(z.string()).optional(), // Update schema to include file
});

export function AddHistoryModal({ onClose }: { onClose: () => void }) {
  const formattedDate = new Date().toISOString().split("T")[0];

  // Initialize state with default values
  const [formData, setFormData] = useState({
    date: formattedDate,
    title: "",
    details: "",
    files: [] as string[], // Add file to state
  });

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "number" ? Number(value) : value,
    }));
  };

  // Handle file input change
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const filePromises = Array.from(files).map(async (file) => {
        const reader = new FileReader();
        return new Promise<string>((resolve, reject) => {
          reader.onloadend = () => {
            const base64String = reader.result?.toString().split(",")[1] || "";
            resolve(base64String);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });

      const base64file = await Promise.all(filePromises);
      setFormData((prev) => ({
        ...prev,
        files: base64file,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
                  rows={5}
                  cols={50}
                  className="form-control"
                  id="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="m-3 d-flex">
                <label htmlFor="files" className="form-label col-3 h6">
                  Files:
                </label>
                <input
                  type="file"
                  id="files"
                  accept=".jpeg, .png, .jpg"
                  multiple
                  onChange={handleFileChange}
                />
              </div>
              <div className="m-3 d-flex">
                <label className="form-label col-3 h6"></label>
                <p className="bg-body-secondary text-body-tertiary">
                  Only accept .jpeg, .png, .jpg files
                </p>
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
