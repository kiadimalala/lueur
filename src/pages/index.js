import * as React from "react";
import Layout from "../Layouts/Default";
import Toolbar from "../components/Toolbar/Toolbar";
import Hero from "../components/Hero/Hero";
import "../styles/global.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome//free-solid-svg-icons";
import Services from "../components/Services/Services";
import Project from "../components/Project/Project";
// markup
const IndexPage = () => {
  return (
    <Layout>
      <Toolbar />
      <Hero />
      <Services />
      <Project />
    </Layout>
  );
};

export default IndexPage;
