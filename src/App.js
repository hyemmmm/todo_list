import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/TodoHead";
import TodoTemplate from "./components/TodoTemplate";
import Todolist from "./components/Todolist";
import Todocreate from "./components/Todocreate";
import { useReducer, useRef } from "react";

const GlobalStyle = createGlobalStyle`
body {
  background-color: lightgray;
}
`;

let initialTodos = {
  text: "",
  todos: [
    {
      id: 1,
      text: "옷입기",
      done: false,
    },
    {
      id: 2,
      text: "먹기",
      done: true,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, text: action.text };
    case "PLUS":
      return { ...state, todos: state.todos.concat(action.todo), text: "" };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "TOGGLE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialTodos);
  const nextId = useRef(3);

  const inputSave = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      text: e.target.value,
    });
  };

  const plusItem = () => {
    dispatch({
      type: "PLUS",
      todo: { id: nextId.current, text: state.text, done: false },
    });
    nextId.current = nextId.current + 1;
  };

  const deleteItem = (id) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  const toggle = (id) => {
    dispatch({
      type: "TOGGLE",
      id: id,
    });
  };

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todos={state.todos}></TodoHead>
        <Todolist todos={state.todos} deleteItem={deleteItem} toggle={toggle} />
        <Todocreate
          inputSave={inputSave}
          plusItem={plusItem}
          input={state.text}
        />
      </TodoTemplate>
    </>
  );
}

export default App;
