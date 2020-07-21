import React, { useRef, useState } from "react";
import StatusBar from "./components/statusbar/statusBar";
import WelcomeUser from "./components/username-box/WelcomeUser";
import { Wrapper, AppWrapper } from "./AppWrapper";
import TodoList from "./components/todolist/TodoList";
import TodoCreate from "./components/todolist/TodoCreate";

function App() {
  const [inputs, setInputs] = useState({
    text: "",
  });

  const { text } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      text: "dd",
      done: true,
    },
    {
      id: 2,
      text: "tesster",
      done: false,
    },
    {
      id: 3,
      text: "lss",
      done: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      text,
    };
    setUsers(users.concat(user));

    setInputs({
      text: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, done: !user.done } : user
      )
    );
  };
  return (
    <Wrapper>
      <AppWrapper>
        <StatusBar />
        <WelcomeUser />
        <TodoCreate text={text} onChange={onChange} onCreate={onCreate} />
        <TodoList users={users} onRemove={onRemove} onToggle={onToggle} />
      </AppWrapper>
    </Wrapper>
  );
  //   }
}

export default App;
