export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

const TodoItem = ({ id, text, done }: Todo) => {
  return (
    <li id={id}>
      <label className={done ? "complete" : undefined}>
        <input type="checkbox" value={text} checked={done} />
        {text}
        <button>x</button>
      </label>
    </li>
  );
};

export default TodoItem;
