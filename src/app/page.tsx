import React from "react";
import Layout from "./layout";
import MainLayout from "./ui/shared/main-layout";
import Introduction from "./ui/main/introduction";

const Home: React.FC = () => {
  return (
    <Layout>
      <MainLayout>
        <Introduction />
      </MainLayout>
    </Layout>
  );
};

export default Home;
