"use client";

import React, { useEffect, useState } from "react";
import Layout from "@/app/ui/shared/main-layout";
import ProfileForm from "@/app/ui/profile/upsert-profile-form";
import { getProfile } from "@/app/lib/dbactions/profile";
import { Profile } from "@/app/lib/utils/definitions";
import Loading from "@/app/ui/shared/loading";
import ErrorPage from "@/app/ui/shared/error";

const UpsertProfilePage: React.FC = () => {
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

  if (loading) return <Loading />;
  if (error) return <ErrorPage error={error} />;

  return (
    <Layout>
      <div className="mt-4 p-3">
        <p className="fs-3">{profile ? "Edit profile" : "Add profile"}</p>
        <div className="border rounded shadow-sm">
          <ProfileForm profile={profile} />
        </div>
      </div>
    </Layout>
  );
};

export default UpsertProfilePage;
