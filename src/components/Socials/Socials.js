import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { COLORS } from "../../constants";

const socials = [
  { name: "facebook", icon: faFacebookF },
  { name: "youtube", icon: faYoutube },
  { name: "youtube", icon: faLinkedinIn },
  { name: "youtube", icon: faInstagram },
];

const Socials = ({ className, rounded }) => {
  return (
    <Wrapper className={className ? className : ""}>
      {socials.map((s) => (
        <li className={`${rounded ? "rounded" : "link "}`}>
          <FontAwesomeIcon key={s.name} icon={s.icon} />
        </li>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  cursor: pointer;
  .link {
    list-style: none;
    padding-left: 15px;
    width: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    color: ${COLORS.greyJoy};
    font-size: 19px;
  }
  .rounded {
    background-color: ${COLORS.whiteHouse};
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-left: 15px;
    border-radius: 20px;
    color: ${COLORS.greyJoy};
  }
  .rounded:hover {
    background-color: ${COLORS.purpleRain};
    color: ${COLORS.whiteChapel};
  }

  &.socials li:first-child {
    margin-left: 0 !important;
  }
`;

export default Socials;
