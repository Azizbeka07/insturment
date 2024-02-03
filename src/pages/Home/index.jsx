import React from "react";
import Header from "@/components/header";
import HeaderTop from "@/components/headerTop";
import Banner from "./components/banner";

const Home = () => {
  return (
    <div>
      <HeaderTop/>
      <Header />
      <Banner/>
    </div>
  );
};

export default Home;
