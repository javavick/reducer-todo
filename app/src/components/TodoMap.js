import React from "react";
import Todo from "./Todo.js";

const TodoMap = ({ state }) => {
  return state.map((item) => <Todo key={item.id} item={item.item} />);
};

export default TodoMap;
