import {
  FETCH_TASKS,
  NEW_TASK,
  REMOVE_TASK,
  UPDATE_TASK
} from "../actions/types";

const initialState = {
  tasks: [],
  update: false
};

const taskReducer = (state = initialState, action) => {
  if (action.type === FETCH_TASKS) {
    return {
      tasks: action.payload,
      update: false
    };
  } else if ([NEW_TASK, REMOVE_TASK, UPDATE_TASK].includes(action.type)) {
    return {
      ...state,
      update: true
    };
  } else {
    return state;
  }
};

export default taskReducer;
