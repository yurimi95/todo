import React, { useRef, useState } from "react";
import StatusBar from "./components/statusbar/statusBar";
import WelcomeUser from "./components/username-box/WelcomeUser";
import { Wrapper, AppWrapper } from "./AppWrapper";
import TodoList from "./components/todolist/TodoList";
import TodoCreate from "./components/todolist/TodoCreate";

function App() {
  const [inputs, setInputs] = useState({
    title: "",
  });

  const { title } = inputs;

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
      title: "dd",
      completed: true,
    },
    {
      id: 2,
      title: "tesster",
      completed: false,
    },
    {
      id: 3,
      title: "lss",
      completed: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      title,
    };
    setUsers(users.concat(user));

    setInputs({
      title: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, completed: !user.completed } : user
      )
    );
  };

  return (
    <Wrapper>
      <AppWrapper>
        <StatusBar />
        <WelcomeUser />
        <TodoCreate title={title} onChange={onChange} onCreate={onCreate} />
        <TodoList users={users} onRemove={onRemove} onToggle={onToggle} />
      </AppWrapper>
    </Wrapper>
  );
  //   }
}

export default App;
