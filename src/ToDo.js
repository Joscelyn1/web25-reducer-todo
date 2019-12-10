import React, { useState } from "react";

function ToDo(props) {
  const [changedToDo, setChangedToDo] = useState("");
  const handleChanges = e => {
    setChangedToDo(e.target.value);
  };
  return (
    <div id="mytodo" className={props.toDo.completed ? "completed" : ""}>
      <p
        onClick={() => {
          props.dispatch({ type: "COMPLETE_TODO", payload: props.toDo.id });
        }}
      >
        {props.toDo.toDo}
      </p>
      <div
        onClick={() =>
          props.dispatch({ type: "TOGGLE_EDIT_TODO", payload: props.toDo.id })
        }
      >
        edit
      </div>
      <div
        onClick={() =>
          props.dispatch({ type: "REMOVE_TODO", payload: props.toDo.id })
        }
      >
        close
      </div>
      {props.toDo.edited ? (
        <div onSubmit={e => e.preventDefault()}>
          <input
            className="todo-input"
            type="text"
            id="edit-todo-form"
            onChange={handleChanges}
            name="editedToDo"
            value={changedToDo}
          />
          <button
            onClick={() =>
              props.dispatch({
                type: "CHANGE_TODO",
                payload: { id: props.toDo.id, changedToDo: changedToDo }
              })
            }
          >
            submit
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ToDo;
