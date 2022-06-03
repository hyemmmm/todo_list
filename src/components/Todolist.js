import React from "react";
import styled from "styled-components";
import Todoitem from "./Todoitem";

const TodolistBlock = styled.ul`
  flex: 1;

  padding: 20px 32px 48px;
  margin: 0;
  overflow-y: auto;
`;

function Todolist({ todos, deleteItem, toggle }) {
  return (
    <>
      <TodolistBlock>
        {todos.map((todo) => {
          return (
            <Todoitem
              todo={todo}
              deleteItem={deleteItem}
              key={todo.id}
              toggle={toggle}
            />
          );
        })}
      </TodolistBlock>
    </>
  );
}

export default Todolist;
