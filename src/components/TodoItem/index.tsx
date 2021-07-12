import React from "react";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const TodoItem = (props: Todo) => {
  const { text, done } = props;

  return (
    <li>
      <label>
        <input type="checkbox" />
        {text}
      </label>
    </li>
  );
};

export default TodoItem;
