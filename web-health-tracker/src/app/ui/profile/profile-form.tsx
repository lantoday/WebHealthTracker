"use client";

import { Profile } from "@/app/lib/utils/definitions";

interface ProfileFormProps {
  profile: Profile | null;
}

export function ProfileForm({ profile }: ProfileFormProps) {
  return (
    <>
      {profile && (
        <div className="pt-4 pr-3">
          <div className="d-flex justify-content-center h4">User info</div>
          {/* first name */}
          <div className="row align-items-center m-4 p-2 h6">
            <span className="col-3">First name:</span>
            <span className="col-6 border p-2 m-1">
              {profile?.firstName ?? ""}
            </span>
          </div>
          {/* last name */}
          <div className="row align-items-center m-4 p-2 h6">
            <span className="col-3">Last name:</span>
            <span className="col-6  border p-2 m-1">
              {profile?.lastName ?? ""}
            </span>
          </div>

          {/* gender */}
          <div className="row align-items-center m-4 p-2 h6">
            <span className="col-3">Gender:</span>
            <span className="col-6  border p-2 m-1">
              {profile?.gender ?? ""}
            </span>
          </div>

          {/* age */}
          <div className="row align-items-center m-4 p-2 h6">
            <span className="col-3">Age:</span>
            <span className="col-6  border p-2 m-1">{profile?.age ?? ""}</span>
          </div>
          {/* height */}
          <div className="row align-items-center m-4 p-2 h6">
            <span className="col-3">Height:</span>
            <span className="col-6 border p-2 m-1">{`${
              profile?.height + " CM" ?? ""
            }`}</span>
          </div>
          {/* weight */}
          <div className="row align-items-center m-4 p-2  h6">
            <span className="col-3">Weight:</span>
            <span className="col-6 border p-2 m-1">{`${
              profile?.weight + " KG" ?? ""
            }`}</span>
          </div>
          <div className="d-flex flex-row-reverse m-4 p-2 h6">
            <button
              className="btn btn-outline-primary"
              onClick={() => (window.location.href = "/management/upsert")}
            >
              Update profile
            </button>
          </div>
        </div>
      )}

      {!profile && (
        <div className="d-flex justify-content-center">
          <div className="p-5">
            <p className="h6">No profile found</p>
            <hr />

            <button
              className="btn btn-outline-primary"
              onClick={() => (window.location.href = "/management/upsert")}
            >
              Add profile
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileForm;
