import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "./heroSection";
import ProjectSection from "./projectSection";
import PressSection from "./pressSection";
import CategorySection from "./categorySection";
import WorkflowSection from "./workflowSection";
import Spotlight from "./Spotlight";
import Blogs from "./Blogs";
import Feedback from "./Feedback";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <PressSection />
      <WorkflowSection />
      <CategorySection />
      <Spotlight />
      <Blogs />
      <Feedback />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
