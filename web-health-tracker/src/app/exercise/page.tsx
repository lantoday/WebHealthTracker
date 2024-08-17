import React from "react";
import Layout from "../ui/shared/main-layout";
import Steps from "../ui/exercise/steps";

const ExercisePage: React.FC = () => {
  return (
    <Layout>
      <p className="h2 d-flex justify-content-center mt-4">Exercise page</p>
      <hr />
      <Steps />
    </Layout>
  );
};

export default ExercisePage;
