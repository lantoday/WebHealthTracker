import React from "react";
import Layout from "./../ui/main-layout";
import ProfileForm from "./../ui/profile-form";

const Profile: React.FC = () => {
  return (
    <Layout>
      <p className="h2">Management</p>
      <hr />

      <div className="m-5 p-3">
        <p className="h4">User profile</p>
        <div className="border">
          <ProfileForm />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
