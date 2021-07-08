import React from "react";
import "../TodoListItem.css";

interface TodoListItemProps {
  text: string;
  check: boolean;
}

type getChangeToggle = (toggleObj: TodoListItemProps) => void;

interface Props {
  todo: TodoListItemProps;
  getChangeName: getChangeToggle;
}

const TodoListItem: React.FunctionComponent<Props> = (props) => {
  const {todo, getChangeName} = props;
  console.log(todo);
  
  return (
    <li>
      <label className={todo.check ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.check}
          onChange={() => getChangeName(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
