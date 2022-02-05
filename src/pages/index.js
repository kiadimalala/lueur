import * as React from "react";
import Layout from "../Layouts/Default";
import Toolbar from "../components/Toolbar/Toolbar";
import Hero from "../components/Hero/Hero";
import "../styles/global.css";

import Services from "../components/Services/Services";
import Project from "../components/Project/Project";
import About from "../components/About/About";
import Values from "../components/Values/Values";
import Com from "../components/Com/Com";
import Details from "../components/Details/Details";
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
      <Com />
      <Details />
    </Layout>
  );
};

export default IndexPage;
