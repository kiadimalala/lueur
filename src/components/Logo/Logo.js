import React from "react";
import styled from "styled-components";
const Logo = ({ className, mobile }) => {
  return (
    <LogoWrapper>
      <div className="contain">
        <img
          className="logo"
          src={
            !mobile
              ? "https://media.lueurexterne.com/logo-lueur-externe-communication-web-agency-blc.svg"
              : "https://media.lueurexterne.com/logo-lueur-externe-communication-web-agency.svg"
          }
        />
      </div>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  padding: 20px 0;

  .contain {
    padding: 0 40px;
  
    .logo {
      width: 280px;
      height: auto;
    }
  }
`;
export default Logo;
