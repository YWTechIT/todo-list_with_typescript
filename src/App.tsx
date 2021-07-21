import TodoItemBox from "./components/TodoItemBox";
import { Todo } from "./components/TodoItem";
import TODO_CONSTANT from "./TODO_CONSTANT";
import Container, { TodoContainer } from "./components/Container";
import Title, { TodoWrapper } from "./components/Title";

const App = () => {
  return (
    <Container>
      <Title />
      <TodoContainer>
        <TodoWrapper>
          <h2>Todo List</h2>
          <TodoItemBox todos={TODO_CONSTANT}></TodoItemBox>
        </TodoWrapper>

        <TodoWrapper>
          <h2>Todo Done List</h2>
          <TodoItemBox todos={TODO_CONSTANT}></TodoItemBox>
        </TodoWrapper>
      </TodoContainer>
    </Container>
  );
};

export default App;
