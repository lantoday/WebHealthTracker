"use client";

import { Profile } from "@/app/lib/definitions";

interface ProfileFormProps {
  profile: Profile | null;
}

export function ProfileForm({ profile }: ProfileFormProps) {
  return (
    <>
      {profile && (
        <div className="pt-4 pr-3">
          {/* first name */}
          <div className="row align-items-center m-4 p-2 h6">
            <span className="col-2">First Name:</span>
            <span className="col-8">{profile?.firstName ?? ""}</span>
          </div>
          {/* last name */}
          <div className="row align-items-center m-4 p-2 h6">
            <span className="col-2">Last Name:</span>
            <span className="col-8">{profile?.lastName ?? ""}</span>
          </div>

          {/* gender */}
          <div className="row align-items-center m-4 p-2 h6">
            <span className="col-2">Gender:</span>
            <span className="col-8">{profile?.gender ?? ""}</span>
          </div>

          {/* age */}
          <div className="row align-items-center m-4 p-2 h6">
            <span className="col-2">Age:</span>
            <span className="col-8">{profile?.age ?? ""}</span>
          </div>
          {/* height */}
          <div className="row align-items-center m-4 p-2 h6">
            <span className="col-2">Height:</span>
            <span className="col-8">{`${profile?.height + " CM" ?? ""}`}</span>
          </div>
          {/* weight */}
          <div className="row align-items-center m-4 p-2  h6">
            <span className="col-2">Weight:</span>
            <span className="col-8">{`${profile?.weight + " KG" ?? ""}`}</span>
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
