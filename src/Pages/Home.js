import React from "react";
import Achievements from "../Components/Achievements";
import Header from "../Components/Header";
import RunningProject from "../Components/RunningProject";
import Service from "../Components/Service";
import PricingTable from "../Components/PricingTable";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <>
      <Header />
      <Service />
      <RunningProject />
      <Achievements />
      <PricingTable></PricingTable>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
