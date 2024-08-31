"use client";

import React, { useEffect, useState } from "react";
import Layout from "@/app/ui/shared/main-layout";
import ProfileForm from "@/app/ui/profile/profile-form";
import { getProfile } from "@/app/lib/dbactions/profile";
import { Profile } from "@/app/lib/definitions";
import Loading from "@/app/ui/shared/loading";
import ErrorPage from "@/app/ui/shared/error";

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const result = await getProfile();
        setProfile(result);
      } catch (err) {
        setError("Failed to fetch profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <Layout>
      {loading && <Loading />}
      {error && <ErrorPage error={error} />}
      <div>
        <div className="m-3 p-2">
          <div className="border">
            <ProfileForm profile={profile} />
          </div>
        </div>
      </div>
      <div>
        <button
          className="btn btn-outline-primary"
          onClick={() => (window.location.href = "/management/upsert")}
        >
          Export data
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => (window.location.href = "/management/upsert")}
        >
          Import data
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => (window.location.href = "/management/upsert")}
        >
          Clear data
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => (window.location.href = "/management/upsert")}
        >
          Export settings
        </button>
      </div>
    </Layout>
  );
};

export default ProfilePage;
