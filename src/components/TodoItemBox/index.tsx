import TodoItem, { Todo } from "../TodoItem";

interface Todos {
  todos: Todo[];
  onRemoveTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
}

const TodoItemBox = ({todos, onToggleTodo,onRemoveTodo}: Todos) => {
  return (
    <>
      <ol>
        {todos.map((todo) => (
          <TodoItem {...todo} key={todo.id} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo}></TodoItem>
        ))}
      </ol>
    </>
  );
};

export default TodoItemBox;
