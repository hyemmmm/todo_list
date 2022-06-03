import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";

const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

function Popup({ onClick }) {
  return (
    <>
      <Popupbg>
        <PopupBlock>
          <Button size="big" color="red" onClick={onClick}>
            확인
          </Button>
        </PopupBlock>
      </Popupbg>
    </>
  );
}

const Popupbg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PopupBlock = styled.div`
  width: 300px;
  height: 200px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-name: ${fadeIn};
`;

export default Popup;
