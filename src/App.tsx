/* eslint-disable @typescript-eslint/no-unused-vars */
import TodoItemBox from "./components/TodoItemBox";
import { Todo } from "./components/TodoItem";
import TODO_CONSTANT from "./TODO_CONSTANT";
import Container, { TodoContainer } from "./components/Container";
import Title, { TodoWrapper } from "./components/Title";
import { useRef, useState } from "react";
import DONE_TODO_CONSTANT from "./DONE_TODO_CONSTANT";
import './App.css';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(TODO_CONSTANT);
  const [doneTodos, setDoneTodos] = useState<Todo[]>(DONE_TODO_CONSTANT);
  const [input, setInput] = useState<string>("");
  const nextId = useRef<number>(todos.length + 1);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodo = {
      id: String(nextId.current),
      text: input,
      done: false
    }
    setTodos(todos.concat(newTodo))
    nextId.current += 1
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <Container>
      <Title />
      <form onSubmit={handleOnSubmit}>
        <input onChange={handleInput}/>
        <button>추가</button>
      </form>
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
