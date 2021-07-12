import React from "react";
import TodoItem, { Todo } from "../TodoItem";

interface Todos {
  todos: Todo[];
}

const TodoItemBox = (props: Todos) => {
  const { todos } = props;
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem {...todo} key={todo.id}></TodoItem>
        ))}
      </ul>
    </>
  );
};

export default TodoItemBox;
