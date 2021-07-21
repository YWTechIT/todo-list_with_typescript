import TodoItem, { Todo } from "../TodoItem";

interface Todos {
  todos: Todo[];
}

const TodoItemBox = ({todos}: Todos) => {
  return (
    <>
      <ol>
        {todos.map((todo) => (
          <TodoItem {...todo} key={todo.id}></TodoItem>
        ))}
      </ol>
    </>
  );
};

export default TodoItemBox;
