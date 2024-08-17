import React from "react";
import Layout from "../ui/shared/main-layout";
import WorkoutCalendar from "../ui/dashboard/workout-calendar";

const Sleep: React.FC = () => {
  return (
    <Layout>
      <p className="h2 d-flex justify-content-center">Dashboard page</p>
      <hr />
      <WorkoutCalendar />
    </Layout>
  );
};

export default Sleep;
