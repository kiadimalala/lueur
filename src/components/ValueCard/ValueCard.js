import React from "react";
import styled from "styled-components";

function ValueCard({ className, content, id }) {
  const { img, value, description } = content;
  return (
    <Wrapper className={className ? className : ""}>
      <img src={img} alt={value} />
      <h3>{value}</h3>
      <div>
        {id === 0 &&
          description.map((des, index) => (
            <React.Fragment>
              {index === 0 && des}
              {` `}
              {index === 1 && <strong>{des}</strong>}
            </React.Fragment>
          ))}
        {id === 1 &&
          description.map((des, index) => (
            <React.Fragment>
              {(index === 0 || index === 2) && ` ${des}`}
              {` `}
              {(index === 1 || index === 3) && <strong> {des}</strong>}
            </React.Fragment>
          ))}
        {id === 2 &&
          description.map((des, index) => (
            <React.Fragment>
              {(index === 0 || index === 2 || index === 4) && ` ${des}`}
              {` `}
              {(index === 1 || index === 3) && <strong> {des}</strong>}
            </React.Fragment>
          ))}
        {id === 3 &&
          description.map((des, index) => (
            <React.Fragment>
              {index === 1 && ` ${des}`}
              {` `}
              {index === 0 && <strong> {des}</strong>}
            </React.Fragment>
          ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 10%;
  flex-grow: 1;
  padding-left: 40px;
  img {
    width: 100%;
    height: auto;
  }
  h3 {
    margin: 30px 0 0 0;
    font-size: 25px;
    line-height: 1.2;
    font-weight: 400;
  }
  div {
    margin: 30px 0 0 0;
  }
`;

export default ValueCard;
