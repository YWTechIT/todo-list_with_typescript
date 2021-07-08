import React, { useState } from "react";
import TodoListItem from "./components/TodoListItem";

interface Todo {
  text: string;
  check: boolean;
};

const initialObj: Array<Todo> = [
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
      <TodoListItem todo={initialObj[0]} getChangeName = {getChangeToggle}/>
      <TodoListItem todo={initialObj[1]} getChangeName = {getChangeToggle} />
    </>
  );
};

export default App;
