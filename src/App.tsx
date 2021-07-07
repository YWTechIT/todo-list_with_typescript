import React from "react";
import TodoListItem from "./components/TodoListItem";

type Todo = {
  text: string;
  check: boolean;
};

const TODO_CONSTANT: Array<Todo> = [
  {
    text: "수영하자",
    check: true,
  },
  {
    text: "헬스하자",
    check: false,
  },
];

const App: React.FunctionComponent = () => {
  return (
    <>
      <TodoListItem todo = {TODO_CONSTANT[0]} />
      <TodoListItem todo = {TODO_CONSTANT[1]} />
    </>
  );
};

export default App;
