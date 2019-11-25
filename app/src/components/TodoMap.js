import React from "react";
import Todo from "./Todo.js";

const TodoMap = ({ state, dispatch }) => {
  return state.map((item) => (
    <Todo
      key={item.id}
      item={item.item}
      dispatch={dispatch}
      id={item.id}
      completed={item.completed}
    />
  ));
};

export default TodoMap;
