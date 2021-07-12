import React from "react";
import TodoItemBox from "./components/TodoItemBox";
import {Todo} from './components/TodoItem';

const TODO_CONSTANT: Todo[] = [
  {
    id: 1,
    text: '타입스크립트',
    done: true
  },
  {
    id: 2,
    text: '파이썬 알고리즘',
    done: false
  },
]

const App:React.FunctionComponent = () => {
  return (
    <>
      <div>안되면 될 때까지 시도하기 U can do it!</div>
      <TodoItemBox todos={TODO_CONSTANT}></TodoItemBox>
    </>
  );
};

export default App;
