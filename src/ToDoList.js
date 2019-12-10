import React, { useState, useReducer } from "react";

import ToDo from "./ToDo.js";
import ToDoForm from "./ToDoForm.js";
// actions -
// TOGGLE_EDITING
// UPDATE_TODO

const ListOfToDos = props => {
  // useReducer - takes in a reducer, and an initialState obj
  // returns - a state obj, and the dispatch fn
  return (
    <div className="list-of-todos">
      {props.state.toDos.map(thing => (
        <div key={thing.id} className="todo">
          {console.log(thing.id)}
          <ToDo
            dispatch={props.dispatch}
            toDos={props.state.toDos}
            toDo={thing}
            key={thing.id}
          />
        </div>
      ))}
    </div>
  );
};

export default ListOfToDos;
