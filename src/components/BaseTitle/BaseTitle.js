import React from "react";
import styled from "styled-components";

const BaseTitle = ({ className, title, label, sub, multiple }) => {
  return (
    <TitleWrapper className={className ? className : ""}>
      <div>
        {multiple && (
          <h2>
            <span>
              {sub}
              <br />
              {label}
            </span>
          </h2>
        )}
        {!multiple && (
          <h2>
            <span>{label}</span>
          </h2>
        )}
      </div>
      <div>
        <h2>{title}</h2>
      </div>
    </TitleWrapper>
  );
};
const TitleWrapper = styled.div`
  &.project_title,
  &.values_title {
    width: 100%;
    height: 76px;
    display: flex;
    align-items: center;
    margin-left: -25px;
    div:first-child {
      width: 33.33%;
      padding-left: 25px;
      display: flex;
      justify-content: flex-end;
      h2 {
        font-family: "Mr Dafoe";
        font-size: 44px;
        line-height: 28px;
        font-weight: 300;
        text-align: right !important;
        span {
          line-height: 28px;
        }
      }
    }
    div:last-child {
      width: 66.66%;
      padding-left: 25px;
      h2 {
        font-weight: 900;
        font-size: 64px;
        text-transform: uppercase;
        margin: 0;
      }
    }
  }
`;
export default BaseTitle;
