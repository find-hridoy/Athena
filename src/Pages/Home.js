import React from "react";
import Achievements from "../Components/Achievements";
import Header from "../Components/Header";
import RunningProject from "../Components/RunningProject";
import Service from "../Components/Service";

const Home = () => {
  return (
    <>
      <Header />
      <Service />
      <RunningProject />
      <Achievements />
    </>
  );
};

export default Home;
