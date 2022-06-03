import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/TodoHead";
import TodoTemplate from "./components/TodoTemplate";
import Todolist from "./components/Todolist";

const GlobalStyle = createGlobalStyle`
body {
  background-color: lightgray;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead></TodoHead>
        <Todolist />
      </TodoTemplate>
    </>
  );
}

export default App;
