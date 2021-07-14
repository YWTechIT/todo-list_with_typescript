/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import TodoItemBox from "./components/TodoItemBox";
import { TodoType } from "./components/TodoItem";

const TODO_CONSTANT: TodoType[] = [
  {
    id: "1",
    text: "타입스크립트",
    done: true,
  },
  {
    id: "2",
    text: "파이썬 알고리즘",
    done: true,
  },
  {
    id: "3",
    text: "수영하기",
    done: false,
  },
];

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<TodoType[]>(TODO_CONSTANT);
  const getToggleState = (id: string) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    console.log(` 변경된 state = ${id}`)
    setTodos(newTodo);
  };
  return (
    <>
      <div>안되면 될 때까지 시도하기 U can do it!</div>
      <div>2주차 - getToggle 함수 생성</div>
      <TodoItemBox todos={todos} getToggleState={getToggleState}></TodoItemBox>
    </>
  );
};

export default App;
