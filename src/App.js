import React, { useState, useReducer } from "react";
import { initialState, toDoReducer } from "./reducers/toDoReducer.js";
import "./App.css";
import ToDoList from "./ToDoList.js";
import ToDoForm from "./ToDoForm.js";

function App() {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoList dispatch={dispatch} state={state} />
      <ToDoForm dispatch={dispatch} />
    </div>
  );
}

export default App;
