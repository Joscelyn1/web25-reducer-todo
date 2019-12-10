export const initialState = {
  toDos: [
    { toDo: "take out the trash", completed: false, id: 1, edited: false },
    { toDo: "make the bed", completed: false, id: 2, edited: false },
    { toDo: "finish book", completed: false, id: 3, edited: false }
  ]
};

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        toDos: [
          ...state.toDos,
          {
            toDo: action.payload,
            completed: false,
            id: Date.now(),
            edited: false
          }
        ]
      };

    case "CLEAR_TODOS":
      return {
        ...state,
        toDos: state.toDos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};
