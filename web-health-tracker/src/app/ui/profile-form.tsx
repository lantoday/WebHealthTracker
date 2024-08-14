"use client";

import { addProfile } from "@/app/lib/actions";
import { useFormStatus, useFormState } from "react-dom";

export function ProfileForm() {
  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(addProfile, initialState);

  return (
    <form action={formAction} className="pt-4 pr-3">
      {/* first name */}
      <div className="row align-items-center m-4">
        <div className="col-2">
          <label htmlFor="firstNameLabel" className="form-label h6">
            First Name:
          </label>
        </div>
        <div className="col-6">
          <input
            type="text"
            name="firstName"
            className="form-control"
            id="firstName"
          />
        </div>
      </div>
      {/* last name */}
      <div className="row align-items-center m-4">
        <div className="col-2">
          <label htmlFor="lastNameLabel" className="form-label h6">
            Last Name:
          </label>
        </div>
        <div className="col-6">
          <input
            type="text"
            name="lastName"
            className="form-control"
            id="lastName"
          />
        </div>
      </div>
      {/* gender */}
      <div className="row align-items-center m-4">
        <div className="col-2">
          <label htmlFor="genderLabel" className="form-label h6">
            Gender:
          </label>
        </div>
        <div className="col-6">
          <input
            type="text"
            name="gender"
            className="form-control"
            id="gender"
          />
        </div>
      </div>
      {/* age */}
      <div className="row align-items-center m-4">
        <div className="col-2">
          <label htmlFor="ageLabel" className="form-label h6">
            Age:
          </label>
        </div>
        <div className="col-6">
          <input type="text" name="age" className="form-control" id="age" />
        </div>
      </div>
      {/* height */}
      <div className="row align-items-center m-4">
        <div className="col-2">
          <label htmlFor="heightLabel" className="form-label h6">
            Height:
          </label>
        </div>
        <div className="col-6">
          <input
            type="text"
            name="height"
            className="form-control"
            id="height"
          />
        </div>
      </div>
      {/* weight */}
      <div className="row align-items-center m-4">
        <div className="col-2">
          <label htmlFor="weightLabel" className="form-label h6">
            Weight:
          </label>
        </div>
        <div className="col-6">
          <input
            type="text"
            name="weight"
            className="form-control"
            id="weight"
          />
        </div>
      </div>

      <div className="col-8 p-3 d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">
          Add profile
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
