import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

import { VscArrowRight } from "react-icons/vsc";

import Section from "../Section/Section";
import Socials from "../Socials/Socials";

const Pages = [
  { name: "L'agence", link: "" },
  { name: "Recrutement", link: "" },
  { name: "Nous contacter", link: "" },
  { name: "Blog", link: "" },
];
const Services = [
  { name: "Studio graphique", link: "" },
  { name: "Web & Digital Marketing", link: "" },
  { name: "Digitalisation de processus", link: "" },
  { name: "Conseil & Stratégie", link: "" },
  { name: "Photo & Vidéo", link: "" },
];

function Footer() {
  return (
    <Wrapper>
      <Section className={"details"}>
        <div className="container">
          <div className="grid">
            <div className="agency_info">
              <div className="agency_logo">
                <img
                  width="230"
                  class="image"
                  alt=""
                  data-src="https://media.lueurexterne.com/logo-lueur-externe-communication-web-agency.svg"
                  src="https://media.lueurexterne.com/logo-lueur-externe-communication-web-agency.svg"
                ></img>
              </div>
              <div className="agency_web">
                <span>
                  <Link to="">muriel@lueurexterne.com</Link>
                </span>
              </div>
              <div className="agency_phone"> Tel. 04 93 42 33 18 </div>
              <div className="agency_address">
                Parc d'Activité des Bois de Grasse
                <br />
                1, avenue Louison Bobet
                <br />
                06130 GRASSE
              </div>
            </div>
            <div className="agency_socials">
              <h1>Suivez-nous</h1>
              <div className="socials_container">
                <Socials className="socials" rounded />
              </div>
            </div>
            <div className="agency_links">
              <h1>Lueur Externe</h1>
              <ul className="links_container">
                {Pages.map((p, index) => (
                  <li>
                    <div className="item">
                      <div className="icon">
                        <VscArrowRight />
                      </div>
                      <div className="name">{p.name}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="agency_links">
              <h1>Nos Services</h1>
              <ul className="links_container">
                {Services.map((p, index) => (
                  <li>
                    <div className="item">
                      <div className="icon">
                        <VscArrowRight />
                      </div>
                      <div className="name">{p.name}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bottom">
        <div className="container">
          <div className="grid">
            <div>
              <div className="item">
                <div className="icon">
                  <VscArrowRight />
                </div>
                <div className="name">Mentions Légales</div>
              </div>
              <div className="item">
                <div className="icon">
                  <VscArrowRight />
                </div>
                <div className="name">Données personnelles</div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </Section>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
.details{
    padding: 65px 0;
    .container {
      padding: 0 40px;
      margin: 0 120px;
      max-width: 1200px;
      margin: auto;
      .grid{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          column-gap:40px;
          .agency_info,.agency_socials,.agency_links,.agency_services{
              h1{
                margin: 15px 0 8px 0;
                line-height: 1.3;
                font-size: 20px;
                font-weight: 400;
                color:${COLORS.pinkPanther}
              }
          }
          .agency_info{
              .agency_logo{
                margin-bottom:30px
              }
              .agency_web{
                font-size:18px!important;
                span{
                    line-height: 1.4;
                    a{
                        text-decoration:none;
                        color:${COLORS.pinkPanther}
                    }
                    
                }
              
              }
              .agency_phone{
                    font-size: 15px!important;
                    line-height: 1.3;
                }
              .agency_address{
                  margin-top:10px;
                  font-size: 15px!important;
              }
          }
          .agency_socials{
              .socials_container{
                  margin-top:30px;
              }
          }
          .agency_links{
              ul{
                  margin:0;
                  padding:0;
              }
              ul li{
                  list-style:none;
              }
              ul li .item{
                  display:flex;
                  align-items:center;
                  margin-bottom:10px;
                .icon{
                    display:flex;
                    align-items:center;
                    color:${COLORS.pinkPanther}
                }
                .name{
                    padding-left:15px;
                    font-size: 17px;
                    line-height: 1.4;
                 
                }
              }
          }
      }
}
.bottom{
  padding: 40px 0;
  .container{
    padding:0 40px;
    .grid{
      display:flex;
      align-items:center;
      justify-content:space-evenly;
      div:first-child{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:flex-end
      }
    }
  }
}
`;

export default Footer;
