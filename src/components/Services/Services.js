import React from "react";
import Section from "../Section/Section";
import Card from "../Card/Card";
const services = [
  {
    name: "studio",
    work: "graphique",
    img: "https://media.lueurexterne.com/icone-studio-graphique.svg",
    tasks: [
      "Identité visuelle",
      "refonte logo",
      "branding",
      "concept campagne",
    ],
  },
  {
    name: "web & digital",
    work: "marketing",
    img: "	https://media.lueurexterne.com/icone-web-labo.svg",
    tasks: [
      "Site vitrine",
      "Site E-Commerce",
      "SEO",
      "Newsletter",
      "Bannière fixe & animée",
    ],
  },
  {
    name: "digitalisation",
    work: "de processus",
    img: "https://media.lueurexterne.com/icone-digitalisation-des-processus.svg",
    tasks: ["Marketing Automation", "Transformation digitale"],
  },
  {
    name: "conseils &",
    work: "strategie",
    img: "https://media.lueurexterne.com/icone-conseils-strategie.svg",
    tasks: ["Plan Média", "Audit marketing", "Stratégie cross media"],
  },
  {
    name: "photo &",
    work: "video",
    img: "https://media.lueurexterne.com/icone-photo-video.svg",
    tasks: ["Plan Média", "Audit marketing", "Stratégie cross media"],
  },
  {
    name: "hebergement",
    work: "sécurisé",
    img: "https://media.lueurexterne.com/icone-hebergement-securise.svg",
    tasks: ["Plan Média", "Audit marketing", "Stratégie cross media"],
  },
];
const Services = () => {
  return (
    <Section className="services">
      <div className="container">
        <div className="grid_container">
          <div className="grid">
            {services.map((service) => (
              <div className="column">
                <Card className="card_body" content={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
