import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const ProjectCard = ({ content }) => {
  const { background } = content;
  return (
    <Wrapper>
      <div className="panel">
        <img className="img" src={background} />
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
  }
`;

export default ProjectCard;
