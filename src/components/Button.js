import React from "react";
import styled, { css } from "styled-components";

function Button({ color, size, children, onClick }) {
  return (
    <>
      {/* <ButtonBlock color="red" size="big">
        버튼1
      </ButtonBlock> */}
      <ButtonBlock color={color} size={size} onClick={onClick}>
        {children}
      </ButtonBlock>
    </>
  );
}

const sizes = {
  big: {
    height: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2rem",
    fontSize: "0.75rem",
  },
};

const sizeStyle = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const ButtonBlock = styled.button`
  padding: 10px 20px;
  color: #fff;
  font-weight: 700;
  border-radius: 8px;
  outline: none;
  background-color: pink;
  border: none;
  cursor: pointer;
  ${({ color }) =>
    css`
      background-color: ${color};
    `}
  ${sizeStyle}
    
  &:active {
    opacity: 0.8;
  }
`;

ButtonBlock.defaultProps = {
  color: "yellow",
};

export default Button;
