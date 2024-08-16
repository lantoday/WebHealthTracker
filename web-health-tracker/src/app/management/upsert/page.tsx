import React from "react";
import Layout from "@/app//ui/main-layout";
import ProfileForm from "@/app/ui/upsert-profile-form";
import { getProfile } from "@/app/lib/dbactions/profile";

const Profile: React.FC = async () => {
  const profile = await Promise.all([getProfile()]);

  return (
    <Layout>
      <p className="h2">Management</p>
      <hr />

      <div className="m-5 p-3">
        {/* TODO need to update the title base on the action: add / update */}
        <p className="h4">User profile</p>
        <div className="border">
          <ProfileForm />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
