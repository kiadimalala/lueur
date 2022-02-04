import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const ProjectCard = ({ content }) => {
  const { background } = content;
  return (
    <Wrapper>
      <div className="panel">
        <img className="img" src={background} />
        {/**<div className="info">
          <img className="logo" src={background} />
  </div>*/}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-left: 15px;
  .panel {
    position: relative;
    .img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
    .info {
      width: 100%;
      height: 100%;
      padding: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export default ProjectCard;
