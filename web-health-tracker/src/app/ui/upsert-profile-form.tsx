"use client";

import { addProfile } from "@/app/lib/actions/profile";
import { useFormStatus, useFormState } from "react-dom";
import { Profile } from "@/app/lib/definitions";

interface UpsertProfileFormProps {
  profile: Profile | null;
}

export function UpsertProfileForm({ profile }: UpsertProfileFormProps) {
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
            value={profile?.firstName}
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
            value={profile?.lastName}
          />
        </div>
      </div>
      {/* gender */}
      <div className="row align-items-center m-4">
        <div className="col-2">
          <label htmlFor="gender" className="form-label h6">
            Gender:
          </label>
        </div>
        <div className="col-6">
          <select
            name="gender"
            className="form-select"
            id="gender"
            defaultValue={profile?.gender || ""}
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
          </select>
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
          <input
            type="text"
            name="age"
            className="form-control"
            id="age"
            value={profile?.age}
          />
        </div>
      </div>
      {/* height */}
      <div className="row align-items-center m-4">
        <div className="col-2">
          <label htmlFor="heightLabel" className="form-label h6">
            Height:
          </label>
        </div>
        <div className="col-6 d-flex">
          <input
            type="text"
            name="height"
            className="form-control"
            id="height"
            value={profile?.height}
          />
          <span className="m-2">CM</span>
        </div>
      </div>
      {/* weight */}
      <div className="row align-items-center m-4">
        <div className="col-2">
          <label htmlFor="weightLabel" className="form-label h6">
            Weight:
          </label>
        </div>
        <div className="col-6 d-flex">
          <input
            type="text"
            name="weight"
            className="form-control"
            id="weight"
            value={profile?.weight}
          />
          <span className="m-2">KG</span>
        </div>
      </div>

      <div className="col-8 p-3 d-flex justify-content-end">
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default UpsertProfileForm;
