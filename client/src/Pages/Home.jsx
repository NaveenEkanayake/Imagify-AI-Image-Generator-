import React from "react";
import Header from "../Components/Header/Header";
import Steps from "../Components/Steps/Steps";
import Description from "../Components/Description/Description";
import Testimonials from "../Components/Testimonials/Testimonials";
import GenerateText from "../Components/Generatetext/GenerateText";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testimonials />
      <GenerateText />
    </div>
  );
};

export default Home;
