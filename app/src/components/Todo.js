import React from "react";
import styled from "styled-components";

const Todo = ({ item, id, completed, dispatch }) => (
  <div>
    <H2
      onClick={() => dispatch({ type: "COMPLETE?", payload: id })}
      completed={completed}
    >
      {item}
    </H2>
  </div>
);

const H2 = styled.h2`
  color: ${(props) => (props.completed ? "#b7b7b7" : "black")};
`;

export default Todo;
