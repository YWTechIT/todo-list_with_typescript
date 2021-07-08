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
  const [toggles, setToggle] = useState(initialObj);  

  const getChangeToggle = (toggleObj: Todo) => {
    const newToggle = toggles.map((toggle) => {
      if (toggle === toggleObj){
        return {
          ...toggle,
          check: !toggle.check
        }
      }
      return toggle
    })
    setToggle(newToggle);
  }

  return (
    <>
      <TodoListItem todo={initialObj[0]} getChangeName = {getChangeToggle}/>
      <TodoListItem todo={initialObj[1]} getChangeName = {getChangeToggle} />
    </>
  );
};

export default App;
