import React from "react";

export interface TodoType {
  id: string;
  text: string;
  done: boolean;
}

interface Todo {
  todo: TodoType
  getToggleState: (id: string) => void;
}

const TodoItem = ({ todo, getToggleState}: Todo) => {

  return (
    <li id={todo.id}>
      <label className={todo.done ? "complete" : undefined}>
        <input type="checkbox" checked={todo.done} onChange={() => getToggleState(todo.id)} />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoItem;
