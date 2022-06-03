import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const CircleButton = styled.button`
  background-color: #38d9a9;
  &:hover {
    background-color: black;
  }
  &:active {
    background-color: #20c997;
  }
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  outline: none;
  border: none;
  font-size: 60px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.125s all ease-in;
  ${({ open }) =>
    open &&
    css`
      transform: translate(-50%, 50%) rotate(45deg);
      background-color: #ff6b6b;
      &:hover {
        background-color: #ff8787;
      }
      &:active {
        background-color: #fa5252;
      }
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.form`
  background-color: #f8f9fa;
  padding: 32px;
  padding-bottom: 72px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-top: 1px solid lightgray;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  font-size: 18px;
`;

function Todocreate({ inputSave, plusItem, input }) {
  const [open, setOpen] = useState(false);

  function enterkey(e) {
    // form 태그라서 필요함(새로고침 되어서)
    if (e.key === "Enter") {
      plusItem();
      setOpen(false);
      e.preventDefault();
    }
  }

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input
              placeholder="할 일을 입력 후, Enter를 누르세요"
              onKeyDown={enterkey}
              onChange={inputSave}
              value={input}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton open={open} onClick={() => setOpen(!open)}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default Todocreate;
