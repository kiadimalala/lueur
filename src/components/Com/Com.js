import React from "react";
import BaseButton from "../BaseButton.js/BaseButton";
import BaseTitle from "../BaseTitle/BaseTitle";
import Section from "../Section/Section";
import { VscArrowRight } from "react-icons/vsc";
const Com = () => {
  return (
    <Section className={"com"}>
      <div className="container">
        <BaseTitle
          className={"com_title"}
          sub="Boostez"
          label="votre"
          multiple
          title={"communication!"}
        />
        <div className="content">
          <div className="column">
            <div className="text">
              Une idée, un projet ?
              <br />
              Une demande de devis ?
              <br />
              Envie d'en savoir plus sur nos prestations ?
              <br />
              Ou simplement d'échanger avec nous ?
            </div>
            <div className="btn_container">
              <BaseButton className={"btn_com"} label={"contactez-nous"}>
                <VscArrowRight />
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Com;
