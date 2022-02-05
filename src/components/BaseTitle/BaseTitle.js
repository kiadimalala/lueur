import React from "react";
import styled from "styled-components";

const BaseTitle = ({ className, title, label, sub, multiple }) => {
  return (
    <TitleWrapper className={className ? className : ""}>
      <div className="subtitle">
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
      <div className="title">
        <h2>{title}</h2>
      </div>
    </TitleWrapper>
  );
};
const TitleWrapper = styled.div`
  &.project_title,
  &.values_title {
    width: 100%;
    display: flex;
    align-items: center;
    .subtitle {
      width: 33.33%;
      padding-left: 25px;
      h2 {
        font-family: "Mr Dafoe";
        font-size: 44px;
        line-height: 23px;
        font-weight: 300;
        text-align: right !important;
        span {
          line-height: 28px;
        }
      }
    }
    .title {
      width: 66.66%;
      padding-left: 25px;
      height: 100%;
      h2 {
        font-weight: 900;
        font-size: 64px;
        text-transform: uppercase;
        margin: 0;
      }
    }
  }
  &.com_title {
    width: 100%;
    display: flex;
    align-items: center;
    .subtitle {
      padding-left: 40px;
      width: 33.33%;
      h2 {
        font-size: 44px;
        line-height: 28px;
        font-family: "Mr Dafoe";
        font-weight: 300;
        text-align: right;
        margin: 0;
      }
    }
    .title {
      width: 66.66%;
      margin: 0 !important;
      padding-left:40px;
      font-weight:900;
      h2 {
        font-weight: 900;
        font-size: 64px;
        text-transform: uppercase;
        margin: 0;
        text-align: left;
      }
    }
  }
`;
export default BaseTitle;
