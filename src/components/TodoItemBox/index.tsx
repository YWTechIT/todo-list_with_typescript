import TodoItem, { Todo } from "../TodoItem";

interface Todos {
  todos: Todo[];
  onRemoveTodo: (id: string) => void;
}

const TodoItemBox = ({todos, onRemoveTodo}: Todos) => {
  return (
    <>
      <ol>
        {todos.map((todo) => (
          <TodoItem {...todo} key={todo.id} onRemoveTodo={onRemoveTodo}></TodoItem>
        ))}
      </ol>
    </>
  );
};

export default TodoItemBox;
