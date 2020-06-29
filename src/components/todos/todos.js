import React, {useState} from "react";
import {Wrapper, TodoInput, TodoList, CheckBox, TaskContents} from "./todosStyle";


const Todos = () => {
    const [todos, setTodos] = useState([
        {
        id:1,
        text: "밥먹기"
        },
        {
        id:2,
        text: "리액트"
        },
        {
        id:3,
        text:"Ddd"
        }
    ]);
    return (
        <Wrapper>
            <TodoInput type="text" placeholder="Add task"/>
            <TodoList>
                <CheckBox/>
                    <TaskContents>dd</TaskContents>
            </TodoList>
            <TodoList>
                <CheckBox/>
                    <TaskContents>dd</TaskContents>
            </TodoList>
            <TodoList>
                <CheckBox/>
                    <TaskContents>aawe</TaskContents>
            </TodoList>
        </Wrapper>
    );
  }
  
  export default Todos;