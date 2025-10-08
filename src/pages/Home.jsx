import React from "react";
import Banner from "../components/banner/Banner";
import State from "../components/state/State";
import TopAppSection from "../components/top-app-section/TopAppSection";
import useApps from "../hooks/useApps";
import Loader from "../components/loader/Loader";

const Home = () => {
  const { apps, loading } = useApps();

  if (loading) {
    return (
      <div className="relative h-[calc(100vh-452px)] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <Banner />
      </div>
      <State />
      <div className="max-w-[1440px] mx-auto">
        <TopAppSection apps={apps} />
      </div>
    </div>
  );
};

export default Home;
