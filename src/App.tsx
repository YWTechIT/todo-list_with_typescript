/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import TodoItemBox from "./components/TodoItemBox";
import { TodoType } from "./components/TodoItem";

const TODO_CONSTANT: TodoType[] = [
  {
    id: "1",
    text: "타입스크립트",
    done: true,
  },
  {
    id: "2",
    text: "파이썬 알고리즘",
    done: true,
  },
  {
    id: "3",
    text: "수영하기",
    done: false,
  },
];

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<TodoType[]>(TODO_CONSTANT);
  const [inputTitle, setInputTitle] = useState<string>("");
  const [todoId, setTodoId] = useState<number>(todos.length);

  const getToggleState = (id: string) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    console.log(` 변경된 state = ${id}`);
    setTodos(newTodo);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const handleClick = () => {
    let currentTodo: TodoType[] = [...todos];
    let currentId: number = todoId + 1;

    if (inputTitle === "") {
      alert("내용을 입력해주세요!");
    } else {
      const newTodo = {
        id: String(currentId),
        text: inputTitle,
        done: false,
      };

      currentTodo.push(newTodo);
      setTodos(currentTodo);
      setTodoId(currentId);
      setInputTitle("");
      console.log(currentTodo);
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <ul>
        <h1> ❏ 안되면 될 때까지 시도하기 U can do it!</h1>
        <h2> ☉ 3주차 - input 내용 입력 후 버튼 클릭하면 목록 추가하기</h2>
      </ul>

      <div>
        <ul>
          <li>
            <input
              onChange={onChange}
              value={inputTitle}
              onKeyPress={onKeyPress}
            />
            <button onClick={()=>handleClick}>추가</button>
          </li>
        </ul>
        <TodoItemBox
          todos={todos}
          getToggleState={getToggleState}
        ></TodoItemBox>
      </div>
    </>
  );
};

export default App;
