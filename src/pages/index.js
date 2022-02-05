import * as React from "react";
import Layout from "../Layouts/Default";
import Toolbar from "../components/Toolbar/Toolbar";
import Hero from "../components/Hero/Hero";
import "../styles/global.css";

import Services from "../components/Services/Services";
import Project from "../components/Project/Project";
import About from "../components/About/About";
import Values from "../components/Values/Values";
// markup
const IndexPage = () => {
  return (
    <Layout>
      <Toolbar />
      <Hero />
      <Services />
      <Project />
      <About />
      <Values />
    </Layout>
  );
};

export default IndexPage;
