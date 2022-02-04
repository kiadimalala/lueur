import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants/index";

import Socials from "../Socials/Socials";

const Toolbar = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <p>L'agence qui fait briller votre image / Tel +33(0)4 93 42 33 18</p>
        </div>
        <div>
          <Socials />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px 0;
  position: relative;
  height: 41px;
  background-color: ${COLORS.whiteHouse};
  .container {
    display: flex;
    align-items: center;
    padding: 0 40px;
    line-height: 1.3;
    div:first-child {
      p {
        margin-bottom: 0;
        margin-top: 15px;
        font-size: 20px;
        color: ${COLORS.pinkPanther};
      }
    }
    div:last-child {
      margin-left: auto;
    }
  }
`;

export default Toolbar;
