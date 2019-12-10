import React, { useState } from "react";

function ToDoForm(props) {
  const [toDo, setToDo] = useState();
  const handleChanges = e => {
    setToDo(e.target.value);
  };
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        className="todo-input"
        type="text"
        id="add-todo-form"
        name="newToDo"
        value={toDo}
        onChange={handleChanges}
      />
      <button
        theme="primary"
        onClick={() => {
          props.dispatch({ type: "ADD_TODO", payload: toDo });
        }}
      >
        Add ToDo
      </button>
      <button>Clear Completed</button>
    </form>
  );
}

export default ToDoForm;
