import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/index";
const Card = ({ className, content }) => {
  const { name, work, img, tasks } = content;
  return (
    <Wrapper className={className ? className : ""}>
      <img className="img" src={img} alt={name} />
      <h2>
        <span>{name}</span>
        <br />
        {work}
      </h2>
      <div className="tasks">{tasks.join(" / ")}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &.card_body:hover {
    background-color: ${COLORS.whiteChapel};
    box-shadow: 1px 15px 50px 3px rgb(68 69 70 / 10%);
  }
  .img {
    width: 200px;
  }
  h2 {
    margin-top: 10px;
    margin-bottom: 0;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 38px;
    text-align: center;
    line-height: 1.1;
    span {
      font-family: "Mr Dafoe";
      text-transform: capitalize;
      font-size: 34.2px;
      font-weight: 300;
      color: ${COLORS.pinkPanther};
    }
  }
  .tasks {
    margin: 10px 0 0 0;
    text-align: center;
    color: ${COLORS.greyJoy};
    text-transform: capitalize;
  }
`;
export default Card;
