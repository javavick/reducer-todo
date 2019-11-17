import React, { useReducer } from "react";
import { initialState, reducer } from "../reducers/Reducer.js";
import Todo from "./Todo.js";

const TodoMap = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return state.map((item) => <Todo item={item.item} />);
};

export default TodoMap;
