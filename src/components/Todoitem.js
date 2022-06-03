import React from "react";
import styled, { css } from "styled-components";
import { MdDelete, MdCheck } from "react-icons/md";

const Remove = styled.div`
  align-items: center;
  justify-content: center;
  color: #ced4da;
  font-size: 24px;
  cursor: pointer;
  display: none;
  &:hover {
    color: black;
  }
`;

const Text = styled.p`
  flex: 1;
  font-size: 21px;
  color: brown;

  ${({ done }) =>
    done &&
    css`
      color: #ced4da;
    `}
`;
const TodoitemBlock = styled.li`
  padding: 12px 0;
  display: flex;
  align-items: center;
  &:hover {
    ${Remove} {
      display: flex;
    }
  }
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

function Todoitem({ todo, deleteItem, toggle }) {
  const { done, text, id } = todo;
  return (
    <>
      <TodoitemBlock>
        <CheckCircle
          onClick={() => {
            toggle(todo.id);
          }}
          done={done}
        >
          {done && <MdCheck />}
        </CheckCircle>
        <Text done={done}>{text}</Text>
        <Remove onClick={() => deleteItem(id)}>
          <MdDelete />
        </Remove>
      </TodoitemBlock>
    </>
  );
}

export default Todoitem;
