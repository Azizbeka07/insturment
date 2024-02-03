import React from "react";
import Header from "@/components/header";
import HeaderTop from "@/components/headerTop";
import Banner from "./components/banner";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div>
      <HeaderTop/>
      <Header />
      <Banner/>
      <Footer/>
    </div>
  );
};

export default Home;
