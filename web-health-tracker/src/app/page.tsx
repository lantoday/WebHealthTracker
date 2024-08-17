import React from "react";
import Layout from "./layout";
import MainLayout from "./ui/shared/main-layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <MainLayout>
        <p>Main page, probably some about info</p>
      </MainLayout>
    </Layout>
  );
};

export default Home;
