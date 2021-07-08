interface TodoListItemProps {
  text: string;
  check: boolean;
}

type getChangeName = (toggleObj: TodoListItemProps) => void;
