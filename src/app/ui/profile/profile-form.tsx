"use client";

import { Profile } from "@/app/lib/utils/definitions";

interface ProfileFormProps {
  profile: Profile | null;
}

export function ProfileForm({ profile }: ProfileFormProps) {
  return (
    <>
      {profile && (
        <div className="p-5">
          <div className="d-flex justify-content-between">
            <div className="fs-2">
              {`${profile?.firstName}  ${profile?.lastName} ` ?? ""}
            </div>

            <div>
              <button
                className="btn btn-sm"
                onClick={() => (window.location.href = "/management/upsert")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <hr />

          {/* gender */}
          <div className="row align-items-center m-1">
            <span className="col-3 fs-6">Gender:</span>
            <span className="col-6 p-2 m-1">{profile?.gender ?? ""}</span>
          </div>

          {/* age */}
          <div className="row align-items-center m-1">
            <span className="col-3 fs-6">Age:</span>
            <span className="col-6 p-2 m-1">{profile?.age ?? ""}</span>
          </div>
          {/* height */}
          <div className="row align-items-center m-1">
            <span className="col-3 fs-6">Height:</span>
            <span className="col-6 p-2 m-1">{`${
              profile?.height + " CM" ?? ""
            }`}</span>
          </div>
          {/* weight */}
          <div className="row align-items-center m-1">
            <span className="col-3 fs-6">Weight:</span>
            <span className="col-6 p-2 m-1">{`${
              profile?.weight + " KG" ?? ""
            }`}</span>
          </div>
        </div>
      )}

      {!profile && (
        <div className="d-flex justify-content-center">
          <div className="p-5">
            <p className="fs-5">No profile found</p>
            <hr />

            <div className="d-flex justify-content-center">
              <button
                className="btn btn-outline-primary"
                onClick={() => (window.location.href = "/management/upsert")}
              >
                Add profile
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileForm;
