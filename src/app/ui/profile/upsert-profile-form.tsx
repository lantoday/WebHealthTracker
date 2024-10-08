"use client";

import { addProfile } from "@/app/lib/actions/profile";
import { useFormState } from "react-dom";
import { Profile } from "@/app/lib/utils/definitions";
import { useState } from "react";

interface UpsertProfileFormProps {
  profile: Profile | null;
}

export function UpsertProfileForm({ profile }: UpsertProfileFormProps) {
  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(addProfile, initialState);
  const [firstName, setFirstName] = useState(profile?.firstName || "");
  const [lastName, setLastName] = useState(profile?.lastName || "");
  const [gender, setGender] = useState(profile?.gender || "");
  const [age, setAge] = useState(profile?.age || "");
  const [height, setHeight] = useState(profile?.height || "");
  const [weight, setWeight] = useState(profile?.weight || "");

  return (
    <form action={formAction} className="pt-4 pr-3">
      {/* first name */}
      <div className="row align-items-center m-4">
        <div className="col-2">
          <label htmlFor="firstNameLabel" className="form-label fs-6">
            First Name:
          </label>
        </div>
        <div className="col-6">
          <input
            type="text"
            name="firstName"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      </div>
      {/* last name */}
      <div className="row align-items-center m-4">
        <div className="col-2">
          <label htmlFor="lastNameLabel" className="form-label fs-6">
            Last Name:
          </label>
        </div>
        <div className="col-6">
          <input
            type="text"
            name="lastName"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      {/* gender */}
      <div className="row align-items-center m-4">
        <div className="col-2">
          <label htmlFor="gender" className="form-label fs-6">
            Gender:
          </label>
        </div>
        <div className="col-6">
          <select
            name="gender"
            className="form-select"
            id="gender"
            defaultValue={gender}
            onChange={(e) => setGender(e.target.value)}
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
          <label htmlFor="ageLabel" className="form-label fs-6">
            Age:
          </label>
        </div>
        <div className="col-6">
          <input
            type="text"
            name="age"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>
      {/* height */}
      <div className="row align-items-center m-4">
        <div className="col-2">
          <label htmlFor="heightLabel" className="form-label fs-6">
            Height:
          </label>
        </div>
        <div className="col-6 d-flex">
          <input
            type="text"
            name="height"
            className="form-control"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <span className="m-2">CM</span>
        </div>
      </div>
      {/* weight */}
      <div className="row align-items-center m-4">
        <div className="col-2">
          <label htmlFor="weightLabel" className="form-label fs-6">
            Weight:
          </label>
        </div>
        <div className="col-6 d-flex">
          <input
            type="text"
            name="weight"
            className="form-control"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <span className="m-2">KG</span>
        </div>
      </div>

      <div className="d-flex flex-row-reverse m-4 p-2 fs-6">
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default UpsertProfileForm;
