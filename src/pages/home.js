import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "./heroSection";
import ProjectSection from "./projectSection";
import PressSection from "./pressSection";
import CategorySection from "./categorySection";
import WorkflowSection from "./workflowSection";
import CornerSection from "./CornerSection";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <PressSection />
      <CategorySection />
      <WorkflowSection />
      <CornerSection />
    </React.Fragment>
  );
};

export default Home;
