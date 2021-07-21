export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

interface TodoProps {
  id: string;
  text: string;
  done: boolean;
  onRemoveTodo: (id: string) => void;
}

const TodoItem = ({ id, text, done, onRemoveTodo }: TodoProps) => {
  return (
    <li id={id}>
      <label className={done ? "complete" : undefined}>
        <input type="checkbox" value={text} />
        {text}
        <button onClick={() => onRemoveTodo(id)}>x</button>
      </label>
    </li>
  );
};

export default TodoItem;
