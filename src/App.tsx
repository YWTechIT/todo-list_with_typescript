/* eslint-disable @typescript-eslint/no-unused-vars */
import TodoItemBox from "./components/TodoItemBox";
import { Todo } from "./components/TodoItem";
import TODO_CONSTANT from "./TODO_CONSTANT";
import Container, { TodoContainer } from "./components/Container";
import Title, { TodoWrapper } from "./components/Title";
import { useState } from "react";
import DONE_TODO_CONSTANT from "./DONE_TODO_CONSTANT";

const App = () => {
  const [todos, setTodos] = useState(TODO_CONSTANT);
  const [doneTodos, setDoneTodos] = useState(DONE_TODO_CONSTANT);

  return (
    <Container>
      <Title />
      <TodoContainer>
        <TodoWrapper>
          <h2>❎ Todo List</h2>
          <TodoItemBox todos={todos}></TodoItemBox>
        </TodoWrapper>

        <TodoWrapper>
          <h2> Todo Done List</h2>
        </TodoWrapper>
      </TodoContainer>
    </Container>
  );
};

export default App;
