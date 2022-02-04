import React from "react";
import Section from "../Section/Section";
import Chevron from "../SVG/Chevron";
import Navigation from "../Navigation/Navigation";
const Hero = () => {
  return (
    <Section className="header">
      <div className="hero">
        <div className="container">
          <Navigation />
          <div className="slog">
            <div className="slog_container">
              <div className="content">
                <div className="text">
                  <h1>
                    Ensemble, nous allons faire
                    <br />
                    briller votre image.
                  </h1>
                  <h2>Lueur Externe, communication & web agency</h2>
                  <div className="chevron">
                    <Chevron className="icon" />
                  </div>
                  <div className="chevron">
                    <Chevron className="icon" />
                  </div>
                  <div className="chevron">
                    <Chevron className="icon" />
                  </div>
                </div>
                <div className="placeholder"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
