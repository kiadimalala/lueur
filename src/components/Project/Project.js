import React from "react";
import BaseTitle from "../BaseTitle/BaseTitle";
import ProjectCard from "../ProjectCard/ProjectCard";
import Section from "../Section/Section";

const projects= [
  {
    background:"https://www.lueurexterne.com/images/realisations/Skooks/Skooks-restaurant-identite-visuelle.jpg",
    logo:"",
    tasks:[]
  },
  {
    background:"https://www.lueurexterne.com/images/realisations/1-apercus/univet-reseau-apercu.jpg",
    logo:"",
    tasks:[]
  },
  {
    background:"https://www.lueurexterne.com/images/realisations/1-apercus/junglevet-creation-logo-direction-artistique.jpg",
    logo:"",
    tasks:[]
  },
  {
    background:"https://www.lueurexterne.com/images/realisations/1-apercus/univet-nature-apercu.jpg",
    logo:"",
    tasks:[]
  },{
    background:"https://www.lueurexterne.com/images/realisations/1-apercus/only-fragrances-only-fragrances.jpg",
    logo:"",
    tasks:[]
  },
  {
    background:"https://www.lueurexterne.com/images/realisations/1-apercus/creation-catalogue-lueurexterne.jpg",
    logo:"",
    tasks:[]
  }
]


const Project = () => {
  return (
    <Section className="projects">
      <div className="container">
        <BaseTitle className="project_title" sub="Nos" label="dernières" title="réalisations"   multiple/>
        <div className="grid_container">
          <div className="grid">
          {projects.map((project,index)=>
            <div className="column">
              <ProjectCard key={index} content={project} />
            </div>
           )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Project;
