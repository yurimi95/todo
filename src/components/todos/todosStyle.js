import styled from "styled-components";

export const Wrapper = styled.div`
margin-top: 65px;
&>div:last-of-type {
  border-bottom: 1px solid #eee;
}
`

export const TodoInput = styled.input`
margin-bottom: 30px;
width: 100%;
line-height: 30px;
border: none;

&::placeholder{
  color: #dad9e2;
}
`

export const TodoList = styled.div`
display: flex;
align-items: center;
padding: 20px 0;
border-top: 1px solid #eee;
`

export const CheckBox = styled.div`
width: 25px;
height: 25px;
border: 3px solid #dad9e2;
border-radius: 50%;
margin-right: 15px;

&:hover {
  cursor: pointer;
  border: 3px solid red;
}
`

export const TaskContents = styled.h2`
font-weight: bold;

&:hover{
  text-decoration: line-through;
}
`