import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants/index";

const Section = ({ children, className }) => {
  return (
    <Wrapper className={className ? className : ""}>
      {children && children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &.header {
    position: relative;
    width: 100%;
    .hero {
      .container {
        padding-top: 130px;
        background-image: url("https://media.lueurexterne.com/lueur-externe-agence-communication-et-web-agency.jpg");
        min-height: calc(100vh - 200px);
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        .slog {
          width: 100%;
          height: 100%;
          .slog_container {
            margin: 0 120px;
            padding: 0 40px;
            .content {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              margin: 0;
              padding: 0;
              .text {
                width: 66.66%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                h1 {
                  margin-top: 0;
                  margin-bottom: 10px;
                  font-weight: 400;
                  font-size: 46px;
                  color: ${COLORS.whiteChapel};
                  line-height: 1.2;
                }
                h2 {
                  margin: 0 0 10px 0;
                  font-size: 20px;
                  color: ${COLORS.yellowJacket};
                  font-weight: 400;
                  line-height: 1.1;
                }
                .chevron {
                  width: 100%;
                  height: 40px;
                  display: flex;
                  align-items: center;
                  span {
                    color: ${COLORS.whiteChapel};
                  }
                }
              }
              .placeholder {
                width: 33.33%;
              }
            }
          }
        }
      }
    }
  }

  //styling services section block
  &.services {
    padding: 65px 0;
    width: 100%;
    .container {
      padding: 0 40px;
      margin: 0 auto;
      max-width: 1200px;
      .grid_container {
        width: 100%;
        margin-top: 40px;
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 20px;
          .column {
            width: 100%;
            padding-left: 40px;
            align-items: center;
          }
        }
      }
    }
  }

  //styling projects block
  &.projects {
    padding: 130px 0;
    .container {
      padding: 0 40px;
      margin: 0 120px;
      .grid_container {
        margin-top: 40px;
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
    }
  }
`;

export default Section;
