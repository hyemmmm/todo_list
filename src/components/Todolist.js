import React from "react";
import styled from "styled-components";
import Todoitem from "./Todoitem";

const TodolistBlock = styled.ul`
  flex: 1;

  padding: 20px 32px 48px;
  margin: 0;
`;

function Todolist() {
  return (
    <>
      <TodolistBlock>
        <Todoitem />
      </TodolistBlock>
    </>
  );
}

export default Todolist;
