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
  onToggleTodo: (id: string) => void;
}

const TodoItem = ({ id, text, done, onRemoveTodo, onToggleTodo }: TodoProps) => {
  return (
    <li id={id}>
      <label className={done ? "complete" : undefined} >
        <input type="checkbox" value={text} checked={done} readOnly onClick={() => onToggleTodo(id)}/>
        {text}
        <button onClick={() => onRemoveTodo(id)}>x</button>
      </label>
    </li>
  );
};

export default TodoItem;
