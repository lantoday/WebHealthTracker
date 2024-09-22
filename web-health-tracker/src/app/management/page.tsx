"use client";

import React, { useEffect, useState } from "react";
import Layout from "@/app/ui/shared/main-layout";
import ProfileForm from "@/app/ui/profile/profile-form";
import { getProfile } from "@/app/lib/dbactions/profile";
import { Profile } from "@/app/lib/utils/definitions";
import Loading from "@/app/ui/shared/loading";
import ErrorPage from "@/app/ui/shared/error";
import Tools from "@/app/ui/profile/tools";

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
      <div className="p-3">
        <div className="border rounded shadow-sm mt-5">
          <ProfileForm profile={profile} />
        </div>
      </div>

      <div className="p-3 mt-4">
        <div className="border rounded shadow-sm">
          <Tools />
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
