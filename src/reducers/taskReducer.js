import {
  FETCH_TASKS,
  NEW_TASK,
  REMOVE_TASK,
  UPDATE_TASK
} from "../actions/types";

const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return action.payload;
    case NEW_TASK:
      return [...state, action.payload];
    case REMOVE_TASK:
      return state.filter(task => task.id !== parseInt(action.payload));
    case UPDATE_TASK:
      return state.map(task =>
        task.id === parseInt(action.payload.id)
          ? Object.assign({}, task, { status: action.payload.status })
          : task
      );
    default:
      return state;
  }
};

export default taskReducer;
