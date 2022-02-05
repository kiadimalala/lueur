import React from "react";
import Section from "../Section/Section";

const About = () => {
  return (
    <Section className="about">
      <div className="container">
        <div className="grid_1">
          <div>
            <h2>
              <span>
                L'agence de communication
                <br />
                qui relève tous vos défis
              </span>
            </h2>
            <div>
              Chez Lueur Externe, il n'y a pas de solution universelle,
              <br />
              mais des solutions sur-mesure, pensées et créées
              <br />
              mais des solutions sur-mesure, pensées et créées
            </div>
          </div>
          <div>2</div>
        </div>
        <div className="grid_2">
          <div>3</div>
          <div>
            <div>
              <div>
                De la petite agence de pub née il y a 15 ans, nous avons su
                conserver nos valeurs, celles qui nous ont permis de vous
                satisfaire année après année…
              </div>
            </div>
          </div>
        </div>
        <div className="grid_3"></div>
      </div>
    </Section>
  );
};

export default About;
