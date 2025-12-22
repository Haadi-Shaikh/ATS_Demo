import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Expertise from "../components/Home/Expertise";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Expertise years={15} />
    </div>
  );
};

export default Home;
