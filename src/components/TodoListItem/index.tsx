import React from "react";
import "../TodoListItem.css";

interface TodoListItemProps {
  text: string;
  check: boolean;
}

interface Props {
  todo: TodoListItemProps;
}

const TodoListItem: React.FunctionComponent<Props> = ({ todo }) => {
  return (
    <li>
      <label className = {todo.check ? "complete" : undefined}>
        <input type="checkbox" checked={todo.check} /> {todo.text}
      </label>

      <div>{todo.check}</div>
    </li>
  );
};

export default TodoListItem;
