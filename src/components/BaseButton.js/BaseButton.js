import React from "react";
import styled from "styled-components";
function BaseButton({ className, children, label }) {
  return (
    <Button className={className ? className : ""}>
      {label && <span className="label">{label}</span>}
      {children && <span className="child">{children}</span>}
    </Button>
  );
}

const Button = styled.button`
  &.btn_com {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 17px;
    line-height: 43px;
    text-transform: uppercase;
    font-family: Barlow;
    font-weight: 300;
    border-radius: 23px;
    background-origin: border-box;
    background-size: 200%;
    background-position-x: 100%;
    border: 1px solid #13100d;
    background-color: transparent;
    color: #13100d;
    transition: all 0.17s ease-in-out;
    padding:0 25px;
   .child{
        width:20px;
        height: 20px;
        display:flex;
        align-items:center;
        font-size:17px;
    }
  }
  &.btn_com:hover {
    color: #fff;
    border-color: #13100d;
    background-image: linear-gradient(90deg, #13100d 50%, transparent 50%);
    background-position-x: 0;
   .child {
      color: #fff !important;
    }
  }
`;

export default BaseButton;
