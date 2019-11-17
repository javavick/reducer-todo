import React, { useReducer } from "react";
import { initialState, reducer } from "./reducers/Reducer.js";
import "./App.css";

// Components
import Header from "./components/Header.js";
import TodoMap from "./components/TodoMap.js";
import Form from "./components/Form.js";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Header />
      <TodoMap state={state} />
      <Form state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
