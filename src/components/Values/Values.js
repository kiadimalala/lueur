import React from "react";
import BaseTitle from "../BaseTitle/BaseTitle";
import Section from "../Section/Section";
import ValueCard from "../ValueCard/ValueCard";

const values = [
  {
    img: "https://www.lueurexterne.com/templates/yootheme/cache/agence-de-com-reactive-grasse-b3c224f2.jpeg",
    value: "Réactivité",
    description: [
      "Nous anticipons les évolutions sur le marché de la communication pour vous apporter",
      "des solutions toujours plus innovantes dans le respect de vos délais",
    ],
  },
  {
    img: "https://www.lueurexterne.com/templates/yootheme/cache/agence-de-com-curiosite-45057d92.jpeg",
    value: "Curiosité",
    description: [
      "Sans curiosité, il n'y aurait pas de créativité ! Alors",
      " notre équipe fouille, veille et décrypte les tendances de demain",
      "pour les mettre",
      "au service de vos projets et de vos idées",
    ],
  },
  {
    img: "https://www.lueurexterne.com/templates/yootheme/cache/agence-de-com-reactive-grasse-b3c224f2.jpeg",
    value: "Écoute",
    description: [
      "Seul « ",
      "Celui qui écoute pleinement peut communiquer efficacement",
      " ». Avant d'agir, nous sommes donc toujours ",
      "à l’écoute de vos besoins",
      ", pour les satisfaire et les réaliser pleinement.",
    ],
  },
  {
    img: "	https://www.lueurexterne.com/templates/yootheme/cache/agence-de-com-ethique-a58f8705.jpeg",
    value: "Ethique",
    description: [
      "Le respect, la confidentialité, la convivialité, la solidarité",
      " sont les valeurs qui nous animent quotidiennement, et qui font de Lueur Externe une agence pas comme les autres. ",
    ],
  },
];

const Values = () => {
  return (
    <Section className={"values"}>
      <div className="container">
        <BaseTitle className={"values_title"} label="Nos" title="valeurs" />
        <div className="grid">
          {values.map((val, index) => (
            <ValueCard id={index} key={index} content={val} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Values;
