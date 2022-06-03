import React from "react";
import styled, { css } from "styled-components";
import { MdDelete, MdCheck } from "react-icons/md";

const TodoitemBlock = styled.li`
  padding: 12px 0;
  display: flex;
  align-items: center;
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 24px;
  cursor: pointer;
`;

const Text = styled.p`
  flex: 1;
  font-size: 21px;
  color: brown;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 20px;
  cursor: pointer;

  ${({ done }) =>
    done &&
    css`
      color: aqua;
      border-color: aqua;
    `}
`;

function Todoitem() {
  const done = true;
  return (
    <>
      <TodoitemBlock>
        <CheckCircle done={done}>{done && <MdCheck />}</CheckCircle>
        <Text done={done}> 투두 리스트 만들기</Text>
        <Remove>
          <MdDelete />
        </Remove>
      </TodoitemBlock>
    </>
  );
}

export default Todoitem;
