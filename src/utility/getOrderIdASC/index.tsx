import { Todo } from "../../components/TodoItem";

const getOrderIdASC = (restTodos: Todo[]) => {
  let ascIdArr = [];
  for (let i = 0; i < restTodos.length; i++) {
    restTodos[i].id = String(i + 1);
  }
  ascIdArr = restTodos;
  return ascIdArr;
};

export default getOrderIdASC;