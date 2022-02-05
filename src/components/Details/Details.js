import React from "react";
import styled from "styled-components";

import Section from "../Section/Section";

function Details() {
  return (
    <Wrapper>
      <Section className={"details"}>
        <div className="container">
          <div className="grid">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
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
      }
}
`;

export default Details;
