import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Components
import Header from "./components/Header.js";
import TodoMap from "./components/TodoMap.js";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoMap />
    </div>
  );
}

export default App;
