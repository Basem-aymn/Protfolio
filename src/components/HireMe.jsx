import React from "react";
import styled from "styled-components";

const HireMe = ({ onClick }) => {
  return (
    <StyledWrapper>
      <button
        className="button"
        onClick={onClick}
        type="button"
        aria-label="Hire Me Button"
      >
        Hire Me
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding-top: 60px;

  button {
    padding: 15px 60px;
    background: transparent;
    border: 2px solid #6528f7;
    font-size: 15px;
    font-weight: bold;
    color: #ffffff;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    display: flex;
    overflow: hidden;
    transition: all 0.5s;
    text-transform: uppercase;
  }

  button span {
    transition: all 0.5s;
    z-index: -1;
  }

  button::after,
  button::before {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    background: #6528f7;
    top: 0;
    transform: skewX(35deg);
    transition: all 0.5s;
    z-index: -1;
  }

  button::after {
    left: -20px;
  }

  button::before {
    right: -20px;
  }

  button:hover::after {
    width: 50%;
    left: 0;
  }

  button:hover::before {
    width: 50%;
    right: 0;
  }
`;

export default HireMe;
