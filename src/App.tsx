/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import TodoItemBox from "./components/TodoItemBox";
import { Todo } from "./components/TodoItem";
import TODO_CONSTANT from "./TODO_CONSTANT";
import Container, { TodoContainer } from "./components/Container";
import Title, { TodoWrapper } from "./components/Title";
import { useRef, useState } from "react";
import DONE_TODO_CONSTANT from "./DONE_TODO_CONSTANT";
import getOrderIdASC from "./utility/getOrderIdASC";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(TODO_CONSTANT);
  const [doneTodos, setDoneTodos] = useState<Todo[]>(DONE_TODO_CONSTANT);
  const [input, setInput] = useState<string>("");
  const nextTodoId = useRef<number>(todos.length + 1);
  const nextDoneTodoId = useRef<number>(doneTodos.length + 1);

  const onAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: String(nextTodoId.current),
      text: input,
      done: false,
    };

    if (input && true) {
      setTodos(todos.concat(newTodo));
    }
    setInput("");
    nextTodoId.current += 1;
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onToggleTodo = (id: string) => {
    const moveTodo: Todo[] = todos.filter((item) => item.id === id);
    const restTodo: Todo[] = todos.filter((item) => item.id !== id);
    const newRestTodoOrderId = getOrderIdASC(restTodo);
    setTodos(newRestTodoOrderId);

    const newTodo = {
      ...moveTodo[0],
      id: String(nextDoneTodoId.current),
      done: true,
    };

    setDoneTodos(doneTodos.concat(newTodo));

    nextDoneTodoId.current += 1;
    nextTodoId.current -= 1;
  };

  const onRemoveTodo = (id: string) => {
    const newTodo: Todo[] = todos.filter((item) => item.id !== id);
    const newOrderTodo: Todo[] = getOrderIdASC(newTodo);
    setTodos(newOrderTodo);
    nextTodoId.current -= 1;
  };

  return (
    <Container>
      <Title />
      <form onSubmit={onAddTodo}>
        <input onChange={handleInput} value={input} />
        <button>추가</button>
      </form>
      <TodoContainer>
        <TodoWrapper>
          <h2>❎ Todo List</h2>
          <TodoItemBox
            todos={todos}
            onRemoveTodo={onRemoveTodo}
            onToggleTodo={onToggleTodo}
          ></TodoItemBox>
        </TodoWrapper>

        <TodoWrapper>
          <h2>✅ Todo Done List</h2>
          <TodoItemBox
            todos={doneTodos}
            onRemoveTodo={onRemoveTodo}
            onToggleTodo={onToggleTodo}
          ></TodoItemBox>
        </TodoWrapper>
      </TodoContainer>
    </Container>
  );
};

export default App;
