import React, { useState } from "react";
import styled from "styled-components";
import { values } from "./../node_modules/@typescript-eslint/eslint-plugin/dist/rules/consistent-type-exports";

export const MyButton = styled.button`
  background: blue;
  color: white;
  pad: 10px;
  ${(props) => props.height && `height: ${props.height}px;`}
`;

export function CustomButton() {
  return <MyButton height={50}>Click me</MyButton>;
}
export const Button = ({ label }) => {
  return <button>{label}</button>;
};

export function ExampleFunc() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const inputRef = useRef();

  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return <div></div>;
}
