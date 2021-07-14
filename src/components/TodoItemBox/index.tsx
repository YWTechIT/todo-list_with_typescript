import React from "react";
import TodoItem, { TodoType } from "../TodoItem";

interface Todos {
  todos: TodoType[];
  getToggleState: (id: string) => void;
}

const TodoItemBox = ({todos, getToggleState}: Todos) => {

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} getToggleState={getToggleState}></TodoItem>
        ))}
      </ul>
    </>
  );
};

export default TodoItemBox;
